import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function tabs() {
  return (
    <>
      <div className="containertabs">
        <div className="d-none d-md-block">
          <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
            <Tab eventKey="one" title="First">
              <Container fluid>
                <Row>
                  <Col className="tabimg">
                    <img
                      src="https://i.imgur.com/nr1hwpD.jpg"
                      alt="of a tv in a room"
                    />
                  </Col>
                  <Col className="tabcontent">
                    <p>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.{" "}
                    </p>
                    <div className="shareicons">
                      <p>SHARE</p>
                      <i className="fab fa-facebook-f fa-2x"></i>
                      <i className="fab fa-twitter fa-2x"></i>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="two" title="Second">
              <Container fluid>
                <Row>
                  <Col className="tabimg">
                    <img
                      src="https://i.imgur.com/mfuH8zU.jpg"
                      alt="A wall full of coffee pictures"
                    />
                  </Col>
                  <Col className="tabcontent">
                    <p>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.{" "}
                    </p>
                    <div className="shareicons">
                      <p>SHARE</p>
                      <i className="fab fa-facebook-f fa-2x"></i>
                      <i className="fab fa-twitter fa-2x"></i>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="three" title="Third">
              <Container fluid>
                <Row>
                  <Col className="tabimg">
                    <img
                      src="https://i.imgur.com/eudlfot.jpg"
                      alt="of a wall with a cracked window"
                    />
                  </Col>
                  <Col className="tabcontent">
                    <p>
                      Morbi eget efficitur turpis. Vivamus pellentesque tortor
                      massa, venenatis pharetra leo laoreet a. Nullam non
                      eleifend justo, a ullamcorper turpis. Cras vehicula
                      pharetra lectus non maximus. Sed condimentum mattis
                      rhoncus.{" "}
                    </p>
                    <div className="shareicons">
                      <p>SHARE</p>
                      <i className="fab fa-facebook-f fa-2x"></i>
                      <i className="fab fa-twitter fa-2x"></i>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
          </Tabs>
        </div>
      </div>
      <Accordion className="d-md-none" defaultActiveKey="one">
        <Accordion.Item eventKey="one">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
            <p className="accordion__paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.{" "}
            </p>
            <img
              src="https://i.imgur.com/nr1hwpD.jpg"
              alt="of a tv in a room"
            />
            <div className="shareicons">
              <p>SHARE</p>
              <i className="fab fa-facebook-f fa-2x"></i>
              <i className="fab fa-twitter fa-2x"></i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="two">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            <p className="accordion__paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.{" "}
            </p>
            <img
              src="https://i.imgur.com/mfuH8zU.jpg"
              alt="of a wall full of coffee pictures"
            />
            <div className="shareicons">
              <p>SHARE</p>
              <i className="fab fa-facebook-f fa-2x"></i>
              <i className="fab fa-twitter fa-2x"></i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="three">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            <p className="accordion__paragraph">
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
              venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed
              condimentum mattis rhoncus.{" "}
            </p>
            <img
              src="https://i.imgur.com/eudlfot.jpg"
              alt="of a wall with a cracked window"
            />
            <div className="shareicons">
              <p>SHARE</p>
              <i className="fab fa-facebook-f fa-2x"></i>
              <i className="fab fa-twitter fa-2x"></i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default tabs;
