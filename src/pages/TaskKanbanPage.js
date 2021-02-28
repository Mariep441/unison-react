import React, { useContext } from "react";
import PageTemplate from '../components/TemplateTaskListPage'
import {TasksContext} from '../contexts/tasksContext'
import AddToAlertButton from '../components/Buttons/addToAlert'




const TaskListPage = () => {
  const context = useContext(TasksContext);

  console.log(context)

  return (
      <PageTemplate 
        title='All Tasks'
        tasks={context.tasks}
        action={task => <AddToAlertButton task={task} /> }
      />
  );
};

export default TaskListPage;