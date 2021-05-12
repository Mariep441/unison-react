import React, { useState } from "react";
import TaskList from "./TaskList";
import FilterControls from "../FilterControls";
import { Col, Row} from '@themesberg/react-bootstrap';

const TemplateTaskListAlertPage = ({tasks,  action}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [processFilter, setProcessFilter] = useState("All");

    let displayedAlertTasks = tasks
    .filter(t => t.alert === true)
    .filter(t => {return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;})
    .filter(t => {return process !== "All Processes"
      ? t.process.name.search(processFilter)
      : true;
    });

    let toDoAlertTasks = tasks
    .filter(t => t.alert === true)
    .filter(t => t.percentageOfCompletion === 0)
    .filter(t => {return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;})
    .filter(t => {return process !== "All Processes"
      ? t.process.name.search(processFilter)
      : true;
    });

    let doingAlertTasks = tasks
    .filter(t => t.alert === true)
    .filter(t => t.percentageOfCompletion > 0 && t.percentageOfCompletion <100)
    .filter(t => {return t.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;})
    .filter(t => {return process !== "All Processes"
      ? t.process.name.search(processFilter)
      : true;
    });

    let doneAlertTasks = tasks
    .filter(t => t.alert === true)
    .filter(t => t.percentageOfCompletion === 100)
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
      <FilterControls onUserInput={handleChange} numTasks={displayedAlertTasks.length}/>

      <Row >

        <Col xs={12} sm={6} xl={4} > <h4>To Do</h4>
          <TaskList action={action} tasks={toDoAlertTasks}></TaskList>
        </Col>

        <Col xs={12} sm={6} xl={4} > <h4>Doing</h4>
          <TaskList action={action} tasks={doingAlertTasks}></TaskList>
        </Col>

        <Col xs={12} sm={6} xl={4} > <h4>Done</h4>
          <TaskList action={action} tasks={doneAlertTasks}></TaskList>
        </Col>
      </Row>


    </>
  );
};

export default TemplateTaskListAlertPage ;