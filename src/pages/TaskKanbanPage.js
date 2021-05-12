import React, { useContext } from "react";
import PageTemplate from '../components/Kanban/TemplateTaskListPage'
import {TasksContext} from '../contexts/tasksContext'
import AddToAlertButton from '../components/Buttons/addToAlert'


const TaskListPage = () => {
  const context = useContext(TasksContext);

  return (
      <PageTemplate 
        title='All Tasks'
        tasks={context.tasks}
        action={task => <AddToAlertButton task={task} /> }
      />
  );
};

export default TaskListPage;