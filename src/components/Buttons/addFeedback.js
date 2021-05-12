import React from "react";
import { Link } from "react-router-dom";

const FeedbackButton = ({task}) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{pathname: `/tasks/${task._id}/feedbackForm`}}
    >
      Write a Feedback
    </Link>
  );
};

export default FeedbackButton;