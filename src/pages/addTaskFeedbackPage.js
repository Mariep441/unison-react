import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Breadcrumb } from '@themesberg/react-bootstrap';
import FeedbackForm  from "../components/Feedback/FeedbackForm";
import useTask from "../hooks/useTask";

const AddTaskFeedbackPage = props => {
    const {_id} = props.match.params;
    const [task] = useTask(_id) 

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Unison</Breadcrumb.Item>
            <Breadcrumb.Item active>New Feedback</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <Row className="justify-content-between align-items-center">
          <Col >
          <h4>New Feedback</h4>
          </Col>
     </Row>

 
      <Col xs={12} xl={12}>
          <FeedbackForm task={task} />
      </Col>

    </>
  );
};

export default withRouter(AddTaskFeedbackPage);

