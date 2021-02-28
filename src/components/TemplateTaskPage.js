import React from "react";
import TaskHeader from './TaskHeader'

const TemplateTaskPage = ({ task, children }) => {
  return (
    <>
    <TaskHeader task={task} />
      <div className="row">
        <div className="col-3">
          
        </div>
        <div className="col-9">{children}</div>
      </div>
    </>
  );
};

export default TemplateTaskPage;