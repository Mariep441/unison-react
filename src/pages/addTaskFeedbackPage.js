import React from "react";
import PageTemplate from "../components/TemplateTaskPage";
import FeedbackForm from '../components/FeedbackForm'

const FeedbackFormPage = props => {

  return (
      <PageTemplate task={props.location.state.task}>
          <FeedbackForm task={props.location.state.task} />
      </PageTemplate>
  );
};
export default FeedbackFormPage;