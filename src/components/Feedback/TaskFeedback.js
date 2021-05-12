import React from "react";

export default ({ feedback }) => {
  return (
    <>
      
      <p>Review By: {feedback.user.firstName}{feedback.user.lastName}  </p>
      <p>Comment: {feedback.comment} </p>
      <p>Level of Difficulty: {feedback.difficulty} </p>
      <p>Communication: {feedback.communication} </p>
      <p>Computer Literacy: {feedback.computerLiteracy} </p>
      <p>Innovative Thinking: {feedback.innovativeThinking} </p>
      <p>Leadership: {feedback.leadership} </p>
      <p>Technical Knowledge: {feedback.technicalKnowledge} </p>
      <p>Management: {feedback.management} </p>
    </>
  );
};