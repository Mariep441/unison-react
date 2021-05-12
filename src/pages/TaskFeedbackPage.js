import React from "react";
import PageTemplate from '../components/Tasks/TemplateTaskPage'
import TaskFeedback from "../components/Feedback/TaskFeedback";

const TaskFeedbackPage = (props) => {
  return (
      <PageTemplate task={props.location.state.task}>
        <TaskFeedback feedback={props.location.state.feedback} /> 
      </PageTemplate>
  );
};

export default TaskFeedbackPage;