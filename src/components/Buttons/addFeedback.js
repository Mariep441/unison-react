import React from "react";
import { Link } from "react-router-dom";

const FeedbackButton = ({ task}) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/feedbacks/form`,
        state: {task: task }
      }}
    >
      Write a Feedback
    </Link>
  );
};

export default FeedbackButton;