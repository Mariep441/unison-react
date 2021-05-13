import React, { useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import Datetime from "react-datetime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import { ProcessesContext } from '../../contexts/processesContext' 
import { UsersContext } from '../../contexts/usersContext' 


export const NewTaskForm =  props => {
  const token = localStorage.getItem('token');
  const [task, setTask] = useState("");
  const [startDate, setStartDate] = useState("");
  const [deadline, setDeadline] = useState(""); 

  const processesContext = useContext(ProcessesContext);
  const usersContext = useContext(UsersContext);
  let history = useHistory();

    const submit = e => {
      e.preventDefault()
      fetch('http://maracuyatech.com:4000/api/tasks', { 
        method: 'POST', 
        body: JSON.stringify( task ),
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json' },
      })
        .then(res => res.json())
         history.push('/tasks')
         window.location.reload(true);
  
    }

    console.log( task)

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
                        value={task.name} 
                        name="name"
                        onChange={e => setTask({ ...task, name: e.target.value })}
                        placeholder="Enter your task name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col sm={12} className="mb-3">
                  <Form.Group id="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        required type="text" 
                        value={task.description} 
                        name="description"
                        onChange={e => setTask({ ...task, description: e.target.value })}
                        placeholder="Enter your task description" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
              <Col md={6} className="mb-3">
                <Form.Group id="process">
                    <Form.Label>Process Name</Form.Label>
                    <Form.Select onChange={e => setTask({ ...task, process: e.target.value })}>
                        {processesContext.processes.map(process => {
                             return (
                                <option key={process._id} value={process._id}>
                                  {process.name}
                                </option>
                              );
                        })}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="client">
                    <Form.Label>Client</Form.Label>
                    <Form.Select onChange={e => setTask({ ...task, client: e.target.value })}>
                      <option value="0">All</option>
                      <option value="Client1">Client1</option>
                      <option value="Client2">Client2</option>
                      <option value="Client3">Client3</option>
                      <option value="Client4">Client4</option>
                      <option value="Client5">Client5</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              
              <Row>
                <Col sm={2} className="mb-3">
                  <Form.Group id="priorityLevel">
                    <Form.Label>Priority</Form.Label>
                    <Form.Select onChange={e => setTask({ ...task, priorityLevel: e.target.value })}>
                      <option value="0">Priority</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm={2} className="mb-3">
                  <Form.Group id="criticalPath">
                    <Form.Label>Critical Path</Form.Label>
                    <Form.Select onChange={e => setTask({ ...task, criticalPath: e.target.value })}>
                    <option value="0">Critical Path</option>
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm={3} className="mb-3">
                  <Form.Group id="estimatedTimeToComplete">
                    <Form.Label>Time to Complete</Form.Label>
                    <Form.Control 
                    required type="float" 
                    placeholder="In hours"
                    value={task.estimatedTimeToComplete} 
                    name="estimatedTimeToComplete"
                    onChange={e => setTask({ ...task, estimatedTimeToComplete: e.target.value })}/>
                  </Form.Group>
                </Col>
                <Col sm={3} className="mb-3">
                  <Form.Group id="timeSpent">
                    <Form.Label>Time spent</Form.Label>
                    <Form.Control 
                    required type="float" 
                    placeholder="In hours"
                    value={task.timeSpent} 
                    name="timeSpent"
                    onChange={e => setTask({ ...task, timeSpent: e.target.value })}/>
                  </Form.Group>
                </Col>
                <Col sm={2} className="mb-3">
                  <Form.Group id="percentageOfCompletion">
                    <Form.Label>% of Completion</Form.Label>
                    <Form.Control 
                    required type="percent" 
                    placeholder="%"
                    value={task.percentageOfCompletion} 
                    name="percentageOfCompletion"
                    onChange={e => setTask({ ...task, percentageOfCompletion: e.target.value })}/>
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
                            onChange={e => setTask({ ...task, startDate: e.target.value})}
                           />
                        </InputGroup>
                      )} />
                  </Form.Group>
                </Col>
                
                <Col md={6} className="mb-3">
                  <Form.Group id="deadline">
                    <Form.Label>Deadline</Form.Label>
                    <Datetime
                      onChange={setDeadline}
                      renderInput={(props) => (
                        <InputGroup>
                          <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                          <Form.Control
                            required type="date"
                            name="deadline"
                            value={props.date}
                            placeholder="yyyy-MM-dd"
                            onChange={e => setTask({ ...task, deadline: e.target.value })}
                           />
                        </InputGroup>
                      )} />
                  </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col md={6} className="mb-3">
                  <Form.Group id="department">
                    <Form.Label>Department</Form.Label>
                    <Form.Select  onChange={e => setTask({ ...task, department: e.target.value })}defaultValue="All">
                      <option value="All">All</option>
                      <option value="Accounting">Accounting</option>
                      <option value="Administrative">Administrative</option>
                      <option value="Compliance">Compliance</option>
                      <option value="Corporate Secretarial">Corporate Secretarial</option>
                      <option value="Global">Global</option>
                      <option value="Pricing">Pricing</option>
                      <option value="Product">Product</option>
                      <option value="Risk and audit">Risk and audit</option>
                      <option value="Senior Management">Senior Management</option>
                      <option value="Transfer Agency">Transfer Agency</option>
                    </Form.Select>

                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Group id="location">
                    <Form.Label>Location</Form.Label>
                    <Form.Select onChange={e => setTask({ ...task, location: e.target.value })}defaultValue="All">
                      <option value="All">All</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Canada">Canada</option>
                      <option value="Cayman">Cayman</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="US">US</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                <Form.Group id="maker">
                    <Form.Label>Assigned to: </Form.Label>
                    <Form.Select onChange={e => setTask({ ...task, maker: e.target.value })}>
                        {usersContext.users.map(user => {
                             return (
                                <option key={user._id} value={user._id}>
                                  {user.firstName}
                                </option>
                              );
                        })}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6} className="mb-3">
                <Form.Group id="checker">
                    <Form.Label>Reviewed by: </Form.Label>
                    <Form.Select onChange={e => setTask({ ...task, checker: e.target.value })}>
                        {usersContext.users.map(user => {
                             return (
                                <option key={user._id} value={user._id}>
                                  {user.firstName}
                                </option>
                              );
                        })}
                    </Form.Select>
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

   