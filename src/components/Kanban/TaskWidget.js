import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Card} from '@themesberg/react-bootstrap';
import { Link } from "react-router-dom";


export const TaskWidget = (props) => {
  const {action, id, name,  description, priorityLevel, estimatedTimeToComplete, percentageOfCompletion, timeSpent, startDate, deadline, icon, iconColor,  percentage, alert } = props;
  
  const target = percentageOfCompletion - percentage
  const percentageIcon = target < 0 ? faAngleDown : faAngleUp;
  const percentageColor = target < 0 ? "text-danger" : "text-success";
  const alertStatus = alert === true ? "card border-danger mb-3" : "shadow-sm";

  return (
    <Card border="light" className={alertStatus}>
      <Card.Body>
            <div className="d-none d-sm-block ">
              <Link to={`/tasks/${id}`}><h3><FontAwesomeIcon icon={icon}/>  {name}</h3></Link>
            </div> 
              <h5 className="mb-1 ">{description}</h5>
              <small><FontAwesomeIcon icon={faCalendarAlt} size="xs" />   {startDate} to {deadline}</small>
              <h5 className="small mt-2"> Priority Level: {priorityLevel}</h5>
              <h5 className="small mt-2"> Time To Complete: {estimatedTimeToComplete} hours</h5>
              <h5 className="small mt-2"> Time Spent: {timeSpent} hours</h5>
              <h5 className="small mt-2"> % Spent: {percentage} %</h5>
              <h5 className="small mt-2"> % Completed: {percentageOfCompletion} %</h5>

            <div className="small mt-2">
              <FontAwesomeIcon icon={percentageIcon} className={`${percentageColor} me-1`} />
              <span className={`${percentageColor} fw-bold`}>
                {target}%
              </span>
            </div>
            
            <div className="card-footer">{action}</div>
      </Card.Body>
    </Card>
  );
};