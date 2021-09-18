import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function footer() {
  return (
    <Container className="footercontainer">
      <Row className="d-block d-md-none">
        <Col className="footer__icons__mobile">
          <i className="fab fa-vimeo-v fa-2x icons"></i>
          <i className="fab fa-youtube fa-2x icons"></i>
        </Col>
      </Row>
      <Row>
        <Col className="d-sm-none d-md-block" className="footericons">
          <i className="fab fa-vimeo-v fa-2x icons"></i>
          <i className="fab fa-youtube fa-2x icons"></i>
        </Col>
        <Col className="footeremail">hello@yay.com</Col>
        <Col className="footercp">Copyright 2021</Col>
      </Row>
    </Container>
  );
}

export default footer;
