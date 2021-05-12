import React, { useState } from "react";
import Checklist from "./Checklists";
import FilterProcess from "../FilterProcess";

const TemplateChecklistPage = ({tasks, action}) => {

  const [processFilter, setProcessFilter] = useState("All");
  let displayedTasks = tasks

    .filter(t => {
      return process = "0"
      ? t.process.name.search(processFilter) !== -1
      : true;
    });

  const handleChange = (type, value) => {
    if (type === "process") setProcessFilter(value);
  };

  return (
    <>
      <FilterProcess 
        onUserInput={handleChange} 
        numTasks={displayedTasks.length}/>
          <Checklist
            action={action}
            tasks={displayedTasks}>   
          </Checklist>
    </>
  );
};

export default TemplateChecklistPage ;