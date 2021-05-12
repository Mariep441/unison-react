import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleDown, faAngleUp, faCommentDots, faEdit, faEllipsisH, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Nav, Card, Button, Table, Dropdown, Pagination, ButtonGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteTask } from "../../api/unison-server-api";
import moment from "moment-timezone";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return (
    value ? <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}{suffix}
      </span>
    </span> : "--"
  );
};

const TaskTable = ({tasks}) => {
  const totalTasks = tasks.length;
  
  const TableRow = (props) => {
    const { _id, name, startDate, deadline, location, department, priorityLevel } = props;

        return (
          <tr>
            <td><Card.Link as={Link} to={`/tasks/${_id}`} className="fw-normal">{name}</Card.Link></td>
            <td><span className="fw-normal">{moment(startDate).format("L")}</span></td>
            <td><span className="fw-normal">{moment(deadline).format("L")}</span></td>
            <td><span className="fw-normal">{location}</span></td>
            <td><span className="fw-normal">{department}</span></td>
            <td><span className="fw-normal">{priorityLevel}</span></td>
            <td>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                  <span className="icon icon-sm">
                    <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                      <Link to={`/tasks/${_id}`}><h7><FontAwesomeIcon icon={faEdit}/>  Edit</h7></Link>
                  </Dropdown.Item>
                  <Dropdown.Item >
                      <Link to={`/tasks/feedback/${_id}`}><h7><FontAwesomeIcon icon={faCommentDots}/> Add Feedback</h7></Link>
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger">
                      <Link onClick={() => deleteTask(_id)}><h7><FontAwesomeIcon icon={faTrashAlt}/> Remove</h7></Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        );
      };


  const CustomPagination = (props) => {
    const [activeItem, setActiveItem] = React.useState(1);
    const { totalPages = `${Math.ceil(totalTasks/25)}`, size = "md", withIcons = false, disablePrev = false } = props;
  
    const onPrevItem = () => {
      const prevActiveItem = activeItem === 1 ? activeItem : activeItem - 1;
      setActiveItem(prevActiveItem);
    };
  
    const onNextItem = () => {
      const nextActiveItem = activeItem === totalPages ? activeItem : activeItem + 1;
      setActiveItem(nextActiveItem);
    };
  
    const items = [];
    for (let number = 1; number <= totalPages; number++) {
      const isItemActive = activeItem === number;
  
      const handlePaginationChange = () => {
        setActiveItem(number);
      };
  
      items.push(
        <Pagination.Item active={isItemActive} key={number} onClick={handlePaginationChange}>
          {number}
        </Pagination.Item>
      );
    }


  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">Name</th>
              <th className="border-bottom">Start Date</th>
              <th className="border-bottom">Due Date</th>
              <th className="border-bottom">Location</th>
              <th className="border-bottom">Department</th>
              <th className="border-bottom">Priority</th>
              <th className="border-bottom">Action</th>
            </tr>
          </thead>
          <tbody>
          {tasks.map(t => <TableRow key={`task-${t._id}`} {...t} />)}
          </tbody>
        </Table>
        <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
          <Nav>
            <Pagination size={size} className="mt-3">
              <Pagination.Prev disabled={disablePrev} onClick={onPrevItem}>
                {withIcons ? <FontAwesomeIcon icon={faAngleDoubleLeft} /> : "Previous"}
              </Pagination.Prev>
              {items}
              <Pagination.Next onClick={() => onNextItem()}>
                {withIcons ? <FontAwesomeIcon icon={faAngleDoubleRight} /> : "Next"}
              </Pagination.Next>
            </Pagination>
          </Nav>
          <small className="fw-bold">
            Showing <b>{totalTasks}</b> out of <b>25</b> entries
          </small>
        </Card.Footer>
      </Card.Body>
    </Card>
    );
  };
  return (
    <Col xl={12}>
      <Card border="light">
        <Card.Body>
          <CustomPagination withIcons />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TaskTable;