import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faPager, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Image, Button, Container, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Routes } from "../router/AppRouter";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import GitHubButton from 'react-github-btn';

export default () => {
  
  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">Unison React</span>
          </Navbar.Brand>

          <div className="d-flex align-items-center">
            <Button variant="outline-white" as={Link} to={Routes.Signin.path} className="ms-3">
              <FontAwesomeIcon icon={faSignInAlt} className="me-1" /> Sign In
            </Button>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">Unison React Dashboard</h1>
              <h7 className="text-muted fw-light mb-5 h5">Inspired by Volt React Dashboard</h7>
              <p className="text-muted fw-light mb-5 h5">Open source powered by React.js and Bootstrap 5</p>
               <div className="d-flex align-items-center justify-content-center">
                <GitHubButton className="mt-lg-2" href="https://github.com/Mariep441/unison-server" data-size="large" >Unison-Server</GitHubButton>
                <GitHubButton className="mt-lg-2" href="https://github.com/Mariep441/unison-react" data-size="large" > Unison-React </GitHubButton>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="section pt-0">
        <Container className="mt-n10 mt-lg-n12 z-2">
          <Row className="justify-content-center">
            <Col xs={12}>
              <Image src={MockupPresentation} alt="Mockup presentation" />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5 mt-lg-6">
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faPager} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">15</h3>
              <p className="text-gray">Pages</p>
            </Col>
            <Col xs={6} md={3} className="text-center mb-4">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faReact} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">100+</h3>
              <p className="text-gray">React Components</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon icon={faSass} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Workflow</h3>
              <p className="text-gray">Sass & react-app</p>
            </Col>
            <Col xs={6} md={3} className="text-center">
              <div className="icon icon-shape icon-lg bg-white shadow-lg border-light rounded-circle mb-4">
                <FontAwesomeIcon color="secondary" icon={faBootstrap} className="text-secondary" />
              </div>
              <h3 className="fw-bolder">Bootstrap 5</h3>
              <p className="text-gray">CSS Framework</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
