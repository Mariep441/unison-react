import React from "react";
import Task from "./GanttCard";


const GanttTaskList = ({tasks}) => {
  
  const ganttCard = tasks.map(t => (<Task key={t._id} task={t} />))
  return <div > { ganttCard}</div>;


};

export default GanttTaskList;