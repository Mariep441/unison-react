import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col } from '@themesberg/react-bootstrap';
import { UserSignin } from "../components/UserSignin";
import { AuthContext } from '../contexts/authContext'


export default () => {
  const context = useContext(AuthContext);

  return (
    <>
      <Col xs={12} xl={12}>
          <UserSignin />
      </Col>
    </>
  );
};
