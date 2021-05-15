import React, { useState, useEffect } from "react";
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';
import {getUserbyEmail} from '../api/unison-server-api'

export const Settings = () => {
  const token = localStorage.getItem('token');
  const [updatedUser, setUpdatedUser] = useState("");
  const email = localStorage.getItem('email')
  const [user, setUser] = useState("");

  useEffect(() => {
    getUserbyEmail(email).then(user => {
      setUser(user);
    });
  }, []);


  const submit = () => {
    
    fetch(`http://maracuyatech.com/api/users/${user._id}`, { 
      method: 'POST', 
      body: JSON.stringify( updatedUser ),
      headers: { 
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      window.location.reload(true);
  }

  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">General information</h5>
        <Form onSubmit={submit}>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control 
                    required type="text" 
                    value={updatedUser.firstName? updatedUser.firstName: user.firstName}
                    name="firstName"
                    onChange={e => setUpdatedUser({ ...updatedUser, firstName: e.target.value})}/>
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control 
                    required type="text" 
                    value={updatedUser.lastName? updatedUser.lastName: user.lastName}
                    name="lastName"
                    onChange={e => setUpdatedUser({ ...updatedUser, lastName: e.target.value})}/>
              </Form.Group>
            </Col>
          </Row>
        <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    required type="text" 
                    value={updatedUser.email? updatedUser.email: user.email}
                    name="email"
                    onChange={e => setUpdatedUser({ ...updatedUser, email: e.target.value})}/>
              </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
              <Form.Group id="role">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  onChange={e => setUpdatedUser({ ...updatedUser, role: e.target.value })}>
                  <option value={user.role}>{user.role}</option>
                  <option value="User">User</option>
                  <option value="Manager">Manager</option>
                  <option value="Administrator">Administrator</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
          <h5 className="my-4">Skills</h5>
          <Row>
          <Col sm={4} className="mb-3">
              <Form.Group id="communication">
                <Form.Label>Communication</Form.Label>
                <Form.Select 
                  onChange={e => setUpdatedUser({ ...updatedUser, communication: e.target.value })}>
                  <option value={user.communication}>{user.communication}</option> 
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group id="computerLiteracy">
                <Form.Label>Computer Literacy</Form.Label>
                <Form.Select 
                onChange={e => setUpdatedUser({ ...updatedUser, computerLiteracy: e.target.value })}>
                  <option value={user.computerLiteracy}>{user.computerLiteracy}</option> 
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group id="innovativeThinking">
                <Form.Label>Innovative Thinking</Form.Label>
                <Form.Select 
                onChange={e => setUpdatedUser({ ...updatedUser, innovativeThinking: e.target.value })}>
                  <option value={user.innovativeThinking}>{user.innovativeThinking}</option> 
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
            </Col>
           </Row>
           <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="leadership">
                <Form.Label>Leadership</Form.Label>
                <Form.Select 
                onChange={e => setUpdatedUser({ ...updatedUser, leadership: e.target.value })}>
                  <option value={user.leadership}>{user.leadership}</option> 
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group id="technicalKnowledge">
                <Form.Label>Technical Knowledge</Form.Label>
                <Form.Select 
                onChange={e => setUpdatedUser({ ...updatedUser, technicalKnowledge: e.target.value })}>
                  <option value={user.technicalKnowledge}>{user.technicalKnowledge}</option> 
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={4} className="mb-3">
              <Form.Group id="management">
                <Form.Label>Management</Form.Label>
                <Form.Select 
                onChange={e => setUpdatedUser({ ...updatedUser, management: e.target.value })}>
                  <option value={user.management}>{user.management}</option> 
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Form.Select>
              </Form.Group>
            </Col>
           </Row>
          <div className="mt-3">
            <Button 
              variant="primary" 
              type="submit" 
              onClick={e => setUpdatedUser({ ...updatedUser, _id: user._id })}>
              Save All
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

