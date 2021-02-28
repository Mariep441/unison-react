import React, { useState } from "react";
import TaskList from "./TaskList";
import FilterControls from "./FilterControls";

const TemplateTaskListPage = ({tasks, action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [processFilter, setProcessFilter] = useState("0");
  const process = Number(processFilter)
  let displayedTasks = tasks
    .filter(t => {
      return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter(p => {
      return process > 0
        ? p.process_ids.includes(Number(processFilter))
        : true;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setProcessFilter(value);
  };

  return (
    <>
      <FilterControls onUserInput={handleChange} numTasks={displayedTasks.length}/>
        <TaskList
          action={action}
          tasks={displayedTasks}
        ></TaskList>
    </>
  );
};

export default TemplateTaskListPage ;