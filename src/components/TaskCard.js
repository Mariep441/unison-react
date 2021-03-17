import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';
import { TaskWidget } from "../components/Widgets";


const TaskKanbanCard = ({task, action}) => {

  return (

    <Row className="justify-content-md-center">

    <Col xs={12} sm={6} xl={4} className="mb-4">
      <TaskWidget
        id={task._id}
        name={task.name}
        description={task.description}
        priorityLevel={task.priorityLevel}
        estimatedTimeToComplete={task.estimatedTimeToComplete}
        period = "hours"
        timeSpent={task.timeSpent}
        startDate={task.startDate}
        deadline={task.deadline}
        creator={task.creator.firstName}

        period="Feb 1 - Apr 1"
        percentage={`${Math.round(task.timeSpent/task.estimatedTimeToComplete*100)}`}

        icon={faChartLine}
        iconColor="shape-secondary"
        action={action(task)}



      />
    </Col>

    <Col xs={12} sm={6} xl={4} className="mb-4">
      <TaskWidget
        category={task.name}
        title="$43,594"
        period="Feb 1 - Apr 1"
        percentage={28.4}
        icon={faCashRegister}
        iconColor="shape-tertiary"
      />
    </Col>

    <Col xs={12} sm={6} xl={4} className="mb-4">
      <TaskWidget
        category={task.name}
        title="$43,594"
        period="Feb 1 - Apr 1"
        percentage={28.4}
        icon={faCashRegister}
        iconColor="shape-tertiary"
      />
    </Col>
</Row>
  );
};

export default TaskKanbanCard ;