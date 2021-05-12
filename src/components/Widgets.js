import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers} from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, ProgressBar } from '@themesberg/react-bootstrap';
import { CircleChart, BarChart } from "./Chartist";

export const TasksWidget = (props) => {
  const { icon, iconColor, total, alert, toDo, doing, done} = props;

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
              <FontAwesomeIcon icon={icon} />
            </div>
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <div className="d-none d-sm-block"><h4>Total Tasks: {total}</h4></div>
            <p></p>
            <h6>To Do: {toDo} </h6>
            <h6>Doing: {doing} </h6>
            <h6>Done: {done} </h6>
            <p></p>
            <div className="text-danger"><h5>Tasks in alert: {alert}</h5></div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CircleChartWidget1 = (props) => {
  const { title, data = [] } = props;
  const series = data.map(d => d.count);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <CircleChart series={series} />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <h4 className="mb-3">{title}</h4>
            {data.map(d => (
              <h6 key={`circle-element-${d._id}`} >
                {` ${d.client} `}{`${d.count}%`}
              </h6>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export const CircleChartWidget2 = (props) => {
  const { title, data = [] } = props;
  const series = data.map(d => d.count);

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body>
        <Row className="d-block d-xl-flex align-items-center">
          <Col xs={12} xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
            <CircleChart series={series} />
          </Col>
          <Col xs={12} xl={7} className="px-xl-0">
            <h4 className="mb-3">{title}</h4>
            {data.map(d => (
              <h6 key={`circle-element-${d._id}`} >
                {` ${d.location} `}{`${d.count}%`}
              </h6>
            ))}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};





export const ProcessTrackWidget = () => {
  const Process = (props) => {
    const { title, percentage, icon, color, last = false } = props;
    const extraClassName = last ? "" : "mb-2";

    return (
      <Row className={`align-items-center ${extraClassName}`}>
        <Col xs="auto">
          <span className={`icon icon-md text-${color}`}>
            <FontAwesomeIcon icon={icon} className="me-1" />
          </span>
        </Col>
        <Col>
          <div className="progress-wrapper">
            <div className="progress-info">
              <h6 className="mb-0">{title}</h6>
              <small className="fw-bold text-dark">
                <span>{percentage} %</span>
              </small>
            </div>
            <ProgressBar variant={color} now={percentage} min={0} max={100}  />
          </div>
        </Col>
      </Row>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header className="border-bottom border-light">
        <h5 className="mb-0">Process track</h5>
      </Card.Header>
      <Card.Body>

        <Process title="Team 1" color="purple" icon={faUsers} percentage={65} />
        <Process title="Team 2" color="danger" icon={faUsers} percentage={60} />
        <Process title="Team 3" color="tertiary" icon={faUsers} percentage={45} />
        <Process title="Team 4" color="info" icon={faUsers} percentage={35} />
        <Process last title="Team 5" color="secondary" icon={faUsers} percentage={34} />
      </Card.Body>
    </Card>
  );
};



export const BarChartWidget = (props) => {
  const { title, value1, value2, data = [] } = props;
  const labels = ['Communication', 'Computer Literacy', 'Innovative Thinking', 'Leadership', 'Technical Knowledge', 'Management'];
  const series = data.map(d => d.value);


  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="d-flex flex-row align-items-center flex-0 border-bottom">
        <div className="d-block">
          <h3 className="fw-normal center text-gray mb-2">{title}</h3>
          <h6>Total Users: {value1}</h6>
          <h6>Total Feedbacks: {value2}</h6>
  
        </div>
        <div className="d-block ms-auto">
          {data.map(d => (
            <div key={`bar-element-${d.id}`} className="d-flex align-items-center text-end mb-2">
              <span className={`shape-xs rounded-circle bg-${d.color} me-2`} />
              <small className="fw-normal">{d.label}</small>
            </div>
          ))}
        </div>
      </Card.Body>
      <Card.Body className="p-2">
        <BarChart labels={labels} series={series} />
      </Card.Body>
    </Card>
  );
};