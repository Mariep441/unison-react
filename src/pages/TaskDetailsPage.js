import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import TaskDetails from "../components/TaskDetails";
import PageTemplate from "../components/TemplateTaskPage";
import TaskFeedbacks from "../components/TaskFeedbacks";
import useTask from "../hooks/useTask";

const TaskPage = props => {
  const { _id } = props.match.params;
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
          path={`/tasks/:id/feedbacks`}
          render={props => <TaskFeedbacks task={task} {...props} />}
        />
      </>
    ) : (
      <p>Waiting for task details</p>
    )}
  </>
  );
};

export default withRouter(TaskPage);