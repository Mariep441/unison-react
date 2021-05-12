import React, { useState } from "react";
import { Form, Button} from '@themesberg/react-bootstrap';

const AddToAlertButton = ({ task }) => {

  const [updatedTask, setUpdatedTask] = useState("");

  const token = localStorage.getItem('token');

  const submit = e => {
    fetch(`http://localhost:4000/api/tasks/${task._id}`, { 
      method: 'POST', 
      body: JSON.stringify( updatedTask ),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' },
    })
      .then(res => res.json())

  };

  const inAlert = (task.alert === true)? false : true

  return (
    <Form onSubmit={submit} >
        <Button 
          variant="primary" 
          type="submit" 
          onClick={e => setUpdatedTask({ ...updatedTask, _id: task._id, alert: inAlert })}>
          {(task.alert == false)? "Add to Alert!" : "Remove from Alert!"}
        </Button>
    </Form>
  );
};

export default AddToAlertButton;