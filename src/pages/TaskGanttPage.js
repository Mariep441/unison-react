import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb, } from '@themesberg/react-bootstrap';
import PageTemplate from '../components/Gantt/TemplateTaskGanttPage'
import {TasksContext} from '../contexts/tasksContext'

const TaskGanttPage = () => {
  const context = useContext(TasksContext);

  return (

    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Unison</Breadcrumb.Item>
            <Breadcrumb.Item active>Gantt Diagram</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div class="d-flex">
        <div class="mr-auto p-2"> <h4>Gantt</h4></div>
      </div>


      <PageTemplate 
        title='All Tasks'
        tasks={context.tasks}

      />

</>
  );
};

export default TaskGanttPage;