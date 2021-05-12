import React, { useState } from "react";
import TaskList from "./TaskList";
import FilterControls from "../FilterControls";
import { Col, Row} from '@themesberg/react-bootstrap';

const TemplateTaskListPage = ({tasks,  action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [processFilter, setProcessFilter] = useState("All");

    let displayedTasks = tasks
    .filter(t => {return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;})
    .filter(t => {return process !== "All Processes"
      ? t.process.name.search(processFilter)
      : true;
    });

    let toDoTasks = tasks
    .filter(t => t.percentageOfCompletion == 0)
    .filter(t => {return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;})
    .filter(t => {return process !== "All Processes"
      ? t.process.name.search(processFilter)
      : true;
    });

    let doingTasks = tasks
    .filter(t => t.percentageOfCompletion > 0 && t.percentageOfCompletion <100)
    .filter(t => {return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;})
    .filter(t => {return process !== "All Processes"
      ? t.process.name.search(processFilter)
      : true;
    });

    let doneTasks = tasks
    .filter(t => t.percentageOfCompletion == 100)
    .filter(t => {return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;})
    .filter(t => {return process !== "All Processes"
      ? t.process.name.search(processFilter)
      : true;
    });  
 

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "process") setProcessFilter(value);
  };

  return (
    <>
      <FilterControls onUserInput={handleChange} numTasks={displayedTasks.length}/>

      <Row >

        <Col xs={12} sm={6} xl={4} > <h4>To Do</h4>
          <TaskList action={action} tasks={toDoTasks}></TaskList>
        </Col>

        <Col xs={12} sm={6} xl={4} > <h4>Doing</h4>
          <TaskList action={action} tasks={doingTasks}></TaskList>
        </Col>

        <Col xs={12} sm={6} xl={4} > <h4>Done</h4>
          <TaskList action={action} tasks={doneTasks}></TaskList>
        </Col>
      </Row>


    </>
  );
};

export default TemplateTaskListPage ;