
import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faEnvelopeOpen, faSignOutAlt, faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { Row, Col, Nav, Image, Navbar, Dropdown, Container, ListGroup} from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routes } from "../router/AppRouter";
import { getUser } from "../api/unison-server-api";

import NOTIFICATIONS_DATA from "../data/notifications";


export default (props) => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce((acc, notif) => acc && notif.read, true);


  const [user, setUser] = useState("");
  useEffect(() => {
    if (props._id) {
      getUser(props._id)
      .then(user => setUser(user))
    }
  })

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map(n => ({ ...n, read: true })));
    }, 300);
  };

  const Notification = (props) => {
    const { link, sender, image, time, message, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
      <ListGroup.Item action href={link} className="border-bottom border-light">
        <Row className="align-items-center">
          <Col className="col-auto">
            <Image src={image} className="user-avatar lg-avatar rounded-circle" />
          </Col>
          <Col className="ps-0 ms--2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">{sender}</h4>
              </div>
              <div className="text-end">
                <small className={readClassName}>{time}</small>
              </div>
            </div>
            <p className="font-small mt-1 mb-0">{message}</p>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };




  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
          </div>
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item} onToggle={markNotificationsAsRead} >
              <Dropdown.Toggle as={Nav.Link} className="text-dark icon-notifications me-lg-3">
                <span className="icon icon-sm">
                  <FontAwesomeIcon icon={faBell} className="bell-shake" />
                  {areNotificationsRead ? null : <span className="icon-badge rounded-circle unread-notifications" />}
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-center mt-2 py-0">
                <ListGroup className="list-group-flush">
                  <Nav.Link href="#/tasks" className="text-center text-primary fw-bold border-bottom border-light py-3">
                    Notifications
                  </Nav.Link>
                  {notifications.map(n => <Notification key={`notification-${n.id}`} {...n} />)}
                  <Nav.Link href="#/tasks" className="text-center text-primary fw-bold border-bottom border-light py-3">
                    View all
                  </Nav.Link>
                </ListGroup>
              </Dropdown.Menu>
            </Dropdown>

        
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}  className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <span className="mb-0 font-small fw-bold">{user.firstName}Boonie Green</span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                  <Dropdown.Item> 
                    <Link to={`/settings`}><h7><FontAwesomeIcon icon={faUserCircle}/>  My Profile</h7></Link>
                  </Dropdown.Item>

                  <Dropdown.Item href="#/settings" className="text-left text-primary fw-bold">
                    <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My Profile
                  </Dropdown.Item>      
                  <Dropdown.Item href="/settings" className="text-left text-primary fw-bold">
                    <FontAwesomeIcon icon={faCog} className="me-2" > </FontAwesomeIcon> Settings
                  </Dropdown.Item>
                  <Dropdown.Item href="#/settings" className="text-left text-primary fw-bold">
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="me-2" ></FontAwesomeIcon> Messages
                  </Dropdown.Item>
                  <Dropdown.Item href="#/settings" className="text-left text-primary fw-bold">
                    <FontAwesomeIcon icon={faUserShield} className="me-2" ></FontAwesomeIcon> Support
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/settings" className="text-left text-primary fw-bold">
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2" ></FontAwesomeIcon> Logout
                  </Dropdown.Item>
            
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
