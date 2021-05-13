import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';

export const NewProcessForm =  props => {
  const [process, setProcess] = useState("");
  const [startDate, setStartDate] = useState("");
  const [deadline, setDeadline] = useState(""); 
  const token = localStorage.getItem('token');
  let history = useHistory();

    const submit = e => {
      e.preventDefault()
      fetch('http://maracuyatech.com:4000/api/processes', { 
        method: 'POST', 
        body: JSON.stringify( process ),
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        history.push('/tasks')
        window.location.reload(false);
    }

    console.log( process)

    return (
        <Card border="light" className="bg-white shadow-sm mb-4">
          <Card.Body>
            <Form onSubmit={submit} >
              <Row>
                <Col sm={12} className="mb-3">
                  <Form.Group id="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        required type="text" 
                        value={process.name} 
                        name="name"
                        onChange={e => setProcess({ ...process, name: e.target.value })}
                        placeholder="Enter your process name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
              <Col md={6} className="mb-3">
                  <Form.Group id="client">
                    <Form.Label>Client</Form.Label>
                    <Form.Select onChange={e => setProcess({ ...process, process: e.target.value })}>
                      <option value="0">All</option>
                      <option value="Client1">Client1</option>
                      <option value="Client2">Client2</option>
                      <option value="Client3">Client3</option>
                      <option value="Client4">Client4</option>
                      <option value="Client5">Client5</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="frequency">
                    <Form.Label>Frequency</Form.Label>
                    <Form.Select onChange={e => setProcess({ ...process, frequency: e.target.value })}>
                      <option value="0">Frequency</option>
                      <option value="daily">daily</option>
                      <option value="weekly">weekly</option>
                      <option value="monthly">monthly</option>
                      <option value="quarterly">quarterly</option>
                      <option value="annually">annually</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col md={6} className="mb-3">
                  <Form.Group id="startDate">
                    <Form.Label>start Date</Form.Label>
                    <Datetime
                      onChange={setStartDate}
                      renderInput={(props) => (
                        <InputGroup>
                          <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                          <Form.Control
                            required type="date"
                            name="startDate"
                            value={props.date}
                            placeholder="yyyy-MM-dd"
                            onChange={e => setProcess({ ...process, startDate: e.target.value})}
                           />
                        </InputGroup>
                      )} />
                  </Form.Group>
                </Col>
                
                <Col md={6} className="mb-3">
                  <Form.Group id="deadline">
                    <Form.Label>Deadline</Form.Label>
                    <Datetime
                      timeFormat={true}
                      onChange={setDeadline}
                      renderInput={(props) => (
                        <InputGroup>
                          <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                          <Form.Control
                            required type="date"
                            name="deadline"
                            value={props.date}
                            placeholder="yyyy-MM-dd"
                            onChange={e => setProcess({ ...process, deadline: e.target.value })}
                           />
                        </InputGroup>
                      )} />
                  </Form.Group>
                </Col>
                </Row>
               
              <div className="mt-3">
                <Button variant="primary" type="submit" >Save All</Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      );
    };

   