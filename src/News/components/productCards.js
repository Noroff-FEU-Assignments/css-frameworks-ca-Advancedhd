import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

function productCards() {
  return (
    <Container className="card__container">
      <Row>
        <Col>
          <Card>
            <img
              src="https://i.imgur.com/64SuFcM.jpg"
              alt="drawer with a lamp and tv"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.imgur.com/4oqVTie.jpg"
              alt="old projector"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.imgur.com/dajrBw8.jpg"
              alt="box tv on a table"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.imgur.com/JQj70kI.jpg"
              alt="old school camera"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="row__two_products">
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.imgur.com/L4WW6rd.jpg"
              alt="broken tv on a metal table"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.imgur.com/NBEhbMK.jpg"
              alt="old school pink camera"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.imgur.com/J1bfJGk.jpg"
              alt="gears of a projector"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://i.imgur.com/OTycYbM.jpg"
              alt="record player"
            />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">MORE</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default productCards;
