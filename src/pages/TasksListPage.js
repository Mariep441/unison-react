import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Breadcrumb } from '@themesberg/react-bootstrap';
import PageTemplate from '../components/Tasks/TemplateTaskTablePage'
import { TasksContext } from '../contexts/tasksContext'
import AddFeedback from '../components/Buttons/addFeedback'
import { Link } from 'react-router-dom';
import { Routes } from "../router/AppRouter";

export default () => {
  const context = useContext(TasksContext);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Unison</Breadcrumb.Item>
            <Breadcrumb.Item active>Tasks List</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div class="d-flex">
        <div class="mr-auto p-2"> <h4>Tasks List</h4></div>
        <div class="ml-auto p-2 align-items-center"> 
        <Button variant="outline-primary" 
            as={Link} to={Routes.NewTask.path} size="sm">
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
            </Button>
        </div>
        <div class="ml-auto p-2 align-items-center">
          <Button variant="outline-primary" 
            as={Link} to={Routes.NewProcess.path} size="sm">
              <FontAwesomeIcon icon={faPlus} className="me-2" />New Process
          </Button>
        </div>
      </div>

      <PageTemplate 
        tasks={context.tasks}
        action={task => <AddFeedback task={task} />}
      />
    </>
  );
};
