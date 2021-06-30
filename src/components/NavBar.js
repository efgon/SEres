import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <React.Fragment>
      <Navbar bg="dark" variant="light">
        <Navbar.Brand href="/">Efren Gonzalez</Navbar.Brand>

        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/OtherProjects">Other Projects</Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
}
export default NavBar;
