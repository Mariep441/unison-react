import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb } from '@themesberg/react-bootstrap';
import Feedbacks from '../components/Feedback/Feedbacks'
import { FeedbacksContext } from '../contexts/feedbacksContext'

export default () => {
  const feedbacksContext = useContext(FeedbacksContext);

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item>Unison</Breadcrumb.Item>
            <Breadcrumb.Item active>Feedbacks</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>

      <div class="d-flex">
        <div class="mr-auto p-2"> <h4>Feedbacks</h4></div>
       
      </div>

      <Feedbacks 
        feedbacks={feedbacksContext.feedbacks}
        
      />
    </>
  );
};
