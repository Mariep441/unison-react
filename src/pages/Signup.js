import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col } from '@themesberg/react-bootstrap';
import { UserSignup } from "../components/UserSignup";


export default () => {

  return (
    <>
      <Col xs={12} xl={12}>
          <UserSignup />
      </Col>
    </>
  );
};

