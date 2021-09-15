import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function footer() {
  return (
    <Container className="footercontainer">
      <Row>
        <Col className="footericons">
          <i className="fab fa-vimeo-v fa-2x"></i>
          <i className="fab fa-youtube fa-2x"></i>
        </Col>
        <Col className="footeremail">hello@yay.com</Col>
        <Col className="footercp">Copyright 2021</Col>
      </Row>
    </Container>
  );
}

export default footer;
