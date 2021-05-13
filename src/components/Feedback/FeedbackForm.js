import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Col, Row, Card, Form, Button, InputGroup } from '@themesberg/react-bootstrap';
import { UsersContext } from '../../contexts/usersContext' 


export default ({task}) => {
  const token = localStorage.getItem('token');
  const [feedback, setFeedback] = useState("");

  const usersContext = useContext(UsersContext);
  let history = useHistory();

  const submit = () => {
    
    fetch(`http://maracuyatech.com:4000/api/feedbacks`, { 
      method: 'POST', 
      body: JSON.stringify( feedback ),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      history.push('/tasks')
      window.location.reload(true);
  }
  
  return (
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <Form onSubmit={submit} >
          <Row>
            <Col sm={12} className="mb-3">
              <Form.Group id="comment">
                <Form.Label>Comment</Form.Label>
                <Form.Control 
                    required type="text" 
                    value={feedback.comment} 
                    name="comment"
                    onChange={e => setFeedback({ ...feedback, comment: e.target.value, task: task })}
                    placeholder="Enter your feedback" />
              </Form.Group>
            </Col>
          </Row>
        <h4>Difficulty Level</h4>  
        <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="difficulty">
                <Form.Label>Difficulty Level</Form.Label>
                <Form.Select onChange={e => setFeedback({ ...feedback, difficulty: e.target.value })}>
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Expert">Expert</option>

                </Form.Select>
              </Form.Group>
            </Col>
           </Row>

        <h4>Skills</h4>

          <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="communication">
                <Form.Label>Communication</Form.Label>
                <Form.Select onChange={e => setFeedback({ ...feedback, communication: e.target.value })}>
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
                <Form.Select onChange={e => setFeedback({ ...feedback, computerLiteracy: e.target.value })}>
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
                <Form.Select onChange={e => setFeedback({ ...feedback, innovativeThinking: e.target.value })}>
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
                <Form.Select onChange={e => setFeedback({ ...feedback, leadership: e.target.value })}>
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
                <Form.Select onChange={e => setFeedback({ ...feedback, technicalKnowledge: e.target.value })}>
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
                <Form.Select onChange={e => setFeedback({ ...feedback, management: e.target.value })}>
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
            <Button variant="primary" type="submit" onClick={submit}>Save All</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

