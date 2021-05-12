import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import TaskDetails from "../components/Tasks/TaskDetails";
import PageTemplate from "../components/Tasks/TemplateTaskPage";
import TaskFeedbacks from "../components/Feedback/TaskFeedbacks";
import useTask from "../hooks/useTask";

const TaskDetailsPage = props => {
  const {_id} = props.match.params;
  const [task] = useTask(_id) 
  
  return (
    <>
    {task ? (
      <>
        <PageTemplate task={task}>
          <TaskDetails task={task} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/feedbacks") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tasks/${_id}/feedbacks`}
              >
                Show Feedbacks (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/tasks/${_id}`}
              >
                Hide Feedbacks
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/tasks/:_id/feedbacks`}
          render={props => <TaskFeedbacks task={task} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for task details</p>
    )}
  </>
  );
};

export default withRouter(TaskDetailsPage);