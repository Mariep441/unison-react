import React, { useContext } from "react";
import { ProcessesContext } from '../contexts/processesContext' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, InputGroup } from '@themesberg/react-bootstrap';


const FilterProcess = props => {
  const context = useContext(ProcessesContext);

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleProcessChange = e => {
    handleChange(e, "process", e.target.value);
  };


  return (
    <div className="table-settings mb-4">
    <Row className="justify-content-between align-items-left">
      <Col xs={8} md={6} lg={3} xl={4}>
        <InputGroup>
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <select class="form-control" 
             id="process" 
              onChange={handleProcessChange}
              defaultValue="">  
            {context.processes.map(process => {
              return (
                <option key={process._id} value={process.name}>
                  {process.name}
                </option>
              );
            })}
          </select>
        </InputGroup>
      </Col>
    </Row>
    </div>
  );
};

export default FilterProcess;