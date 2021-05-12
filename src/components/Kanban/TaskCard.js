import React from "react";
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { Col, Row} from '@themesberg/react-bootstrap';
import { TaskWidget } from "./TaskWidget";
import moment from "moment-timezone";


const TaskKanbanCard = ( {task, action}) => {

  return (
  <Col className="justify-content-md-center">
    <Row className="justify-content-md-center">

      <TaskWidget
        name={task.name}
        description={task.description}
        priorityLevel={task.priorityLevel}
        alert={task.alert}
        startDate={moment(task.startDate).format("L")}
        deadline={moment(task.deadline).format("L")}
        estimatedTimeToComplete={task.estimatedTimeToComplete}
        timeSpent={task.timeSpent}
        percentageOfCompletion={task.percentageOfCompletion}
        percentage={`${Math.round(task.timeSpent/task.estimatedTimeToComplete*100)}`}
        icon={faChartLine}
        iconColor="shape-secondary"
        action={action(task)}
      />
    </Row>
  </Col>
  );
};

export default TaskKanbanCard ;