import React, { useState } from "react";
import GanttTaskList from "./GanttTaskList";
import FilterControls from "../FilterControls";

const TemplateTaskGanttPage = ({tasks}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [processFilter, setProcessFilter] = useState("All");
  

  let displayedTasks = tasks
    .filter(t => {
      return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(t => {
      return process != "All"
      ? t.process.name.search(processFilter)
      : true;
   
    });


  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "process") setProcessFilter(value);
  };

  return (
    <>
      <FilterControls 
      onUserInput={handleChange} />
        <GanttTaskList tasks={displayedTasks} ></GanttTaskList>
    </>
  );
};

export default TemplateTaskGanttPage ;