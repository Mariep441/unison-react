import React, {useContext} from "react";
import TaskListPageTemplate from "../components/TemplateTaskListPage";
import AddFeedback from '../components/Buttons/addFeedback'
import {TasksContext} from '../contexts/tasksContext'

const AlertTasksPage = props => {
  const context = useContext(TasksContext);
  return (
    <TaskListPageTemplate
      tasks={context.alertes}
      title={"Alert Tasks"}
      action={task => <AddFeedback task={task} />}
    />
  );
};

export default AlertTasksPage;