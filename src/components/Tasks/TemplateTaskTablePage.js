import React, { useState } from "react";
import TaskTable from "./TaskTable";
import FilterControls from "../FilterControls";

const TemplateTaskTablePage = ({tasks, action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");

  let displayedTasks = tasks
    .filter(t => {return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;})
    .filter(t => {return t.location.toLowerCase().search(locationFilter.toLowerCase()) !== -1;})
    .filter(t => {return t.department.toLowerCase().search(departmentFilter.toLowerCase()) !== -1;})


  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "location") setLocationFilter(value);
    else if (type === "department") setDepartmentFilter(value);

  };

  return (
    <>
      <FilterControls 
        onUserInput={handleChange} 
        numTasks={displayedTasks.length}/>
          <TaskTable
            action={action}
            tasks={displayedTasks}>   
          </TaskTable>
    </>
  );
};

export default TemplateTaskTablePage ;