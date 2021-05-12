import React from "react";
import Task from "./TaskCard";


const TaskList = ({tasks, action}) => {
  
  const taskCards = tasks
  .map(t => (<Task key={t._id} task={t} action={action}/>))
  return <div > { taskCards}</div>;


};

export default TaskList;