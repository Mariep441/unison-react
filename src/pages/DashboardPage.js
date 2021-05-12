import React, { useContext } from "react";
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { Col, Row } from '@themesberg/react-bootstrap';
import { TasksWidget, CircleChartWidget1, CircleChartWidget2, BarChartWidget, ProcessTrackWidget } from "../components/Widgets";

import { TasksContext } from '../contexts/tasksContext'
import { UsersContext } from '../contexts/usersContext'

export default () => {

  const tasksContext = useContext(TasksContext);
  const usersContext = useContext(UsersContext);
  
  const client = [
    { id: 1, client: "Client1", count: Math.round(tasksContext.tasks.filter(t => t.client === "Client1").length/tasksContext.tasks.length*100)},
    { id: 2, client: "Client2", count: Math.round(tasksContext.tasks.filter(t => t.client === "Client2").length/tasksContext.tasks.length*100)},
    { id: 3, client: "Client3", count: Math.round(tasksContext.tasks.filter(t => t.client === "Client3").length/tasksContext.tasks.length*100)},
    { id: 4, client: "Client4", count: Math.round(tasksContext.tasks.filter(t => t.client === "Client4").length/tasksContext.tasks.length*100)},
    { id: 5, client: "Client5", count: Math.round(tasksContext.tasks.filter(t => t.client === "Client5").length/tasksContext.tasks.length*100)} 
  ];


  const geographic = [
    { id: 1, location: "Bermuda", count: Math.round(tasksContext.tasks.filter(t => t.location === "Bermuda").length/tasksContext.tasks.length*100)},
    { id: 2, location: "Canada",count: Math.round(tasksContext.tasks.filter(t => t.location === "Canada").length/tasksContext.tasks.length*100)},
    { id: 3, location: "Ireland", count: Math.round(tasksContext.tasks.filter(t => t.location === "Ireland").length/tasksContext.tasks.length*100)},
    { id: 4, location: "Luxembourg", count: Math.round(tasksContext.tasks.filter(t => t.location === "Luxembourg").length/tasksContext.tasks.length*100)},
    { id: 5, location: "US", count: Math.round(tasksContext.tasks.filter(t => t.location === "US").length/tasksContext.tasks.length*100)} 
  ];

  const skills = [
    { id: 1, 
      label: "Users skills", 
      value: [1, 5, 2, 5, 4, 3], 
      color: "tertiary" },
    { id: 2, 
      label: "Tasks feedbacks", 
      value: [2, 3, 4, 8, 1, 2], 
      color: "secondary" }
  ];


  return (
    <>
      <Row className="justify-content-md-center">

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <TasksWidget
            category="Tasks"
            total={tasksContext.tasks.length}
            alert={tasksContext.tasks.filter(t => t.alert === true).length}
            toDo={tasksContext.tasks.filter(t => t.percentageOfCompletion === 0).length}
            doing={tasksContext.tasks.filter(t => t.percentageOfCompletion > 0 && t.percentageOfCompletion <100).length}
            done={tasksContext.tasks.filter(t => t.percentageOfCompletion === 100).length}
            percentage={18.2}
            icon={faTasks}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget1
            title="Tasks/Client"
            data={client} />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget2
            title="Tasks/Location"
            data={geographic} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} className="mb-4">
          <ProcessTrackWidget
            p1={65} />
        </Col>
      </Row>

      <Row>
        <Col xl={12} >
          <BarChartWidget
            title="Skills required for the tasks"
            value1={usersContext.users.length}
            value2={tasksContext.tasks.length}
            data={skills} />
        </Col>
      </Row>
    </>
  );
};
