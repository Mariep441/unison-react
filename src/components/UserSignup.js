
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../router/AppRouter";


export const UserSignup = () => {
  let history = useHistory();
  const [user, setUser] = useState("");
  

  const submit = e => {
    e.preventDefault()
    fetch('http://localhost:4000/api/users', { 
      method: 'POST', 
      body: JSON.stringify( user ),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      history.push('/signin')
      window.location.reload(true);
  }


  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form onSubmit={submit} >
                <Form.Group id="firstName" className="mb-4">
                    <Form.Label>Your First Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control 
                      autoFocus 
                      required type="text" 
                      value={user.firstName} 
                      name="firstName}"
                      onChange={e => setUser({ ...user, firstName: e.target.value })}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="lastName" className="mb-4">
                    <Form.Label>Your Last Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control 
                      autoFocus 
                      required type="text" 
                      value={user.lastName} 
                      name="lastName"
                      onChange={e => setUser({ ...user, lastName: e.target.value })}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control 
                      autoFocus 
                      required type="email" 
                      placeholder="example@company.com"
                      value={user.email} 
                      name="email"
                      onChange={e => setUser({ ...user, email: e.target.value })}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control 
                      required type="password" 
                      placeholder="Password" 
                      value={user.password} 
                      name="password"
                      onChange={e => setUser({ ...user, password: e.target.value })}/>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control 
                      required type="password" 
                      placeholder="Confirm Password" />
                    </InputGroup>
                  </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>

                  <Button variant="primary" type="submit" onClick={submit} className="w-100">
                    Sign up
                  </Button>
                </Form>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={Routes.Signup.path} className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
        </Container>
      </section>
    </main>
  );
};
