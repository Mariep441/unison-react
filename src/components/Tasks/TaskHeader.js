import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TaskHeader = ({ task }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
          {task.name}
          {"  "}
          <a href={task.description}>
            <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
          </a>
        </h2>
      </div>
    </div>
  );
};

export default TaskHeader;