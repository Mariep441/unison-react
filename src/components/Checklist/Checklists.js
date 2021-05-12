import React from "react";
import { Card, Button, Table } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import moment from "moment-timezone";


const Checklist = ({tasks}) => {

  const TableRow = (props) => {
    const { _id, name, process, maker, checker, percentageOfCompletion, validated, lastUpdate } = props;


        return (
          <tr>
            <td><Card.Link as={Link} to={`/tasks/${_id}`} className="fw-normal">{name}</Card.Link></td>
            <td><span className="fw-normal">{process.name}</span></td>
            <td><span className="fw-normal">{maker.firstName} {maker.lastName}</span></td>
            <td><span className="fw-normal">{checker.firstName} {checker.lastName}</span></td>
            <td><span className="fw-normal">{percentageOfCompletion}</span></td>
            <td><span className="form-check"><input class="form-check-input" type="checkbox" value= {validated} ></input></span></td>
            <td><span className="fw-normal">{moment(lastUpdate).format("L")}</span></td>
          </tr>
        );
      };

  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Name</th>
              <th className="border-bottom">Process</th>
              <th className="border-bottom">Maker</th>
              <th className="border-bottom">Checker</th>
              <th className="border-bottom">Completed</th>
              <th className="border-bottom">Validated</th>
              <th className="border-bottom">Last Update</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map(t => <TableRow key={`task-${t._id}`} {...t} />)}
          </tbody>
        </Table>
        <div className="mt-3"><Button variant="primary" type="submit"> Validate</Button></div>
      </Card.Body>
    </Card>
    );
  };


export default Checklist;