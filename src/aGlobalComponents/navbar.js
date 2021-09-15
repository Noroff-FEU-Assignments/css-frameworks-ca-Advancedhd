import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GlobalNavbar() {
  return (
    <>
      <Row>
        <Navbar bg="gray" expand="lg">
          <Navbar.Brand className="logo" href="/home">
            The YAY Company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Col>
              <Nav className="g-0" navbarScroll>
                <NavLink
                  className=""
                  to="/home"
                  activeStyle={{ backgroundColor: "#ffffff", color: "#0a0a0a" }}
                >
                  Home
                </NavLink>
                <NavLink
                  className=""
                  to="/news"
                  activeStyle={{ backgroundColor: "#ffffff", color: "#0a0a0a" }}
                >
                  News
                </NavLink>
                <NavLink
                  className=""
                  to="/contact"
                  activeStyle={{ backgroundColor: "#ffffff", color: "#0a0a0a" }}
                >
                  Contact
                </NavLink>
              </Nav>
            </Col>
            <Col>
              <Form className="d-flex">
                <FormControl
                  className=""
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button>Go</Button>
              </Form>
            </Col>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </>
  );
}

export default GlobalNavbar;
