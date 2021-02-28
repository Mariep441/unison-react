import React, {useContext } from "react";
import {useForm} from "react-hook-form";
import {TasksContext} from '../contexts/tasksContext'
import { withRouter } from "react-router-dom";

const FeedbackForm = ({ task, history }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const context = useContext(TasksContext);

  const onSubmit = data => {
    context.addFeedbacks(task, data)
    history.push("/tasks/alerts");
  };

  return (
    <form className="form bg-dark text-light" onSubmit={handleSubmit(onSubmit)}>
      <h3>Add your Feedback</h3>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          defaultValue={task.feedback ? task.feedback.author : ""}
          name="author"
          ref={register({ required: "Author name required" })}
        />
      </div>
      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        <textarea
          rows="10"
          type="text"
          className="form-control"
          placeholder="Write your review"
          defaultValue={task.feedback ? task.feedback.content : ""}
          name="content"
          ref={register({
            required: "No review text",
            minLength: { value: 10, message: "Review is too short" }
          })}
        />
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="reset"
        className="btn btn-primary reset"
        onClick={() => {
          reset({
            author: "",
            content: ""
          });
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default withRouter(FeedbackForm);