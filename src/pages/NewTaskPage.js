import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, Breadcrumb, } from '@themesberg/react-bootstrap';
import { NewTaskForm } from "../components/FormNewTask";


export default () => {

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Unison</Breadcrumb.Item>
            <Breadcrumb.Item active>New Task</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
          <h4>New Task</h4>
          </Col>
     </Row>

 
      <Col xs={12} xl={12}>
          <NewTaskForm />
      </Col>
    </>
  );
};
