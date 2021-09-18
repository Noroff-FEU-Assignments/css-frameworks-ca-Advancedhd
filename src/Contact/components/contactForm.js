import React from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";

function contactForm() {
  return (
    <Row className="contact__row">
      <Col md={6} md={{ order: "first" }}>
        <h1 className="contact__heading">Submit your details</h1>
        <div className="form__container">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <InputGroup>
                <InputGroup.Text>https://</InputGroup.Text>
                <Form.Control id="inlineFormInputGroup" />
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={8} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Allow us to sell your personal details to whomever we want"
              />
            </Form.Group>
            <Button className="form__button" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </Col>
      <Col xs={{ order: "first" }} md={6} className="contact__info__container">
        <p>
          <i className="fas fa-envelope fa-2x"></i>hello@yay.com
        </p>
        <p>
          <i className="fas fa-phone fa-2x"></i>123 456 7890
        </p>
        <div className="contact__position">
          <p>
            <i className="fas fa-map-marker-alt fa-2x"></i>123 Some Street
          </p>
          <p className="contact__position__p">Somewhere</p>
          <p className="contact__position__p">Some City</p>
          <p className="contact__position__p"> 10000</p>
        </div>
      </Col>
    </Row>
  );
}

export default contactForm;
