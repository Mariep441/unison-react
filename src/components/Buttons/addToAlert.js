import React, { useContext } from "react";
import {TasksContext} from "../../contexts/tasksContext";

const AddToAlertButton = ({ task }) => {
  const context = useContext(TasksContext);

  const handleAddToAlert = e => {
    e.preventDefault();
    context.addToAlerts(task._id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToAlert}
    >
      Add to Alert
    </button>
  );
};

export default AddToAlertButton;