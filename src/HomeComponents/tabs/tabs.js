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
                    <img src="https://i.imgur.com/nr1hwpD.jpg" />
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
                    <img src="https://i.imgur.com/mfuH8zU.jpg" />
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
                    <img src="https://i.imgur.com/eudlfot.jpg" />
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
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="two">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="three">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default tabs;

{
  /* <Container fluid="md">
  <Row>
    <Col><img src="https://i.imgur.com/nr1hwpD.jpg" /></Col>
    <Col><p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.{" "}
              </p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i></Col>
  </Row>
</Container> */
}

{
  /* <Container fluid>
  <Row>
    <Col> <img src="https://i.imgur.com/mfuH8zU.jpg" /></Col>
    <Col><p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.{" "}
              </p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i></Col>
  </Row>
</Container> */
}

{
  /* <Container fluid>
  <Row>
    <Col><img src="https://i.imgur.com/eudlfot.jpg" /></Col>
    <Col><p>
                Morbi eget efficitur turpis. Vivamus pellentesque tortor massa,
                venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                ullamcorper turpis. Cras vehicula pharetra lectus non maximus.
                Sed condimentum mattis rhoncus.{" "}
              </p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i></Col>
  </Row>
</Container> */
}
