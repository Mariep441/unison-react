import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, InputGroup } from '@themesberg/react-bootstrap';


const FilterControls = props => {

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };
  const handleNameChange = e => {
    handleChange(e, "name", e.target.value);
  };
  const handleLocationChange = e => {
    handleChange(e, "location", e.target.value);
  };
  const handleDepartmentChange = e => {
    handleChange(e, "department", e.target.value);
  };

  return (
    <div className="table-settings mb-4">
    <Row className="justify-content-between align-items-left">
      <Col xs={8} md={6} lg={3} xl={4}>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control 
              type="text" 
              placeholder="Task Name" 
              onChange={handleNameChange} />
        </InputGroup>
      </Col>
      <Col xs={8} md={6} lg={3} xl={4}>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control 
              type="text" 
              placeholder="Task Location" 
              onChange={handleLocationChange} />
        </InputGroup>
      </Col>
      <Col xs={8} md={6} lg={3} xl={4}>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <Form.Control 
              type="text" 
              placeholder="Task Department" 
              onChange={handleDepartmentChange} />
        </InputGroup>
      </Col>
     
    </Row>
    </div>
  );
};

export default FilterControls;