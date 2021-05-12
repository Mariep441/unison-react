import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb } from '@themesberg/react-bootstrap';
import PageTemplate from '../components/Checklist/TemplateChecklistPage'
import { TasksContext } from '../contexts/tasksContext'
import AddFeedback from '../components/Buttons/addFeedback'

export default () => {
  const context = useContext(TasksContext);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Unison</Breadcrumb.Item>
            <Breadcrumb.Item active>Checklist</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div class="d-flex">
        <div class="mr-auto p-2"> <h4>Checklist</h4></div>

      </div>

      <PageTemplate 
        tasks={context.tasks}
        action={task => <AddFeedback task={task} />}
      />
    </>
  );
};
