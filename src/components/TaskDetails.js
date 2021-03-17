import React from "react";

export default ({task}) => {

  console.log(task)
  return (
    <>
      <h4>Overview</h4>
      <h4>{task.name}</h4>


    </>
  );
};