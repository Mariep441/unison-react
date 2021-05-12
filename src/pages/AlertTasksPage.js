import React, {useContext} from "react";
import TaskListPageTemplate from "../components/Kanban/TemplateTaskListAlertPage";
import AddFeedback from '../components/Buttons/addFeedback'
import {TasksContext} from '../contexts/tasksContext'

const AlertTasksPage = props => {
  const context = useContext(TasksContext);
  return (
    <TaskListPageTemplate
      tasks={context.tasks}
      title={"Alert Tasks"}
      action={task => <AddFeedback task={task} />}
    />
  );
};

export default AlertTasksPage;