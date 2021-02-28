import React from "react";

export default ({ feedback }) => {
  return (
    <>
      <p>Review By: {feedback.author} </p>
      <p>{feedback.content} </p>
    </>
  );
};