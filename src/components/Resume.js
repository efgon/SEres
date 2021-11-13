import NavBar from "./NavBar";
import React from "react";
import ResponRet from "./popover-Ret";
import ResponTut from "./popover-tut";
import ResponMil from "./popover-mil";
import { Container, Row, Col } from "react-bootstrap";
//import Details from "react-details";

function Resume() {
  return (
    <Container className="resume-header" fluid>
      <NavBar />

      <div className="resume mx-lg-5 mb-5">
        <h1 className="efren">Efren Gonzalez</h1>
        <Row>
          <Col>
            <h6>a: Newark, NJ 07103</h6>
            <h6>
              @:{" "}
              <a href="mailto:egonzalezgar@gmail.com">egonzalezgar@gmail.com</a>
            </h6>
            <h6>
              #:<a href="tel:347-602-0407"> 347-602-0407</a>
            </h6>
          </Col>
          <Col>
            <h6>
              GitHub: <a href="https://github.com/efgon">github.com/efgon</a>
            </h6>
            <h6>
              LinkedIn:
              <a href="https://www.linkedin.com/in/efren-gonzalez-5aa67bb4/">
                linkedin.com/in/efren-gonzalez-5aa67bb4/
              </a>
            </h6>
            <h6>
              {" "}
              Personal:{" "}
              <a href="https://efgon.github.io/SEres/">
                efgon.github.io/SEres/
              </a>
            </h6>
          </Col>
        </Row>
        <h2 className="developer"> Full-stack Software Engineer</h2>
        <h6>JavaScript, React, Node.js, Python, Django, MongoDB, SQL</h6>
        <details style={{ marginTop: "2rem" }} open>
          <summary>
            <h3>Summary</h3>
          </summary>
          <p>
            Full-Stack Software Engineer with 2+ years of experience with HTML,
            CSS, Javascript, React and OOP languages such as Python and C++ and
            some of their frameworks (Django and .Net). Problem solver and great
            team-player.
          </p>
          <p>
            Proven experience working with RESTful API's and databases such as
            SQL, MySQL, Mongoose.
          </p>
        </details>
        <Row>
          <Col>
            <details open>
              <summary>
                <h3>Relevant Skills</h3>
              </summary>
              <ul>
                <li>Python</li>
                <li>Django</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>CSS</li>
                <li>HTML5</li>
                <li>Git </li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>API's</li>
              </ul>
            </details>
          </Col>
          <Col sm>
            <details open>
              <summary>
                <h3>Education</h3>
              </summary>
              <h4>Web Development Certificate (front and back - end)</h4>{" "}
              <h6>Kenzie Academy of SNHU - Indianapolis, IN</h6>
              <h6>October 2020 to October 2021</h6>
              <h4>B.S. in Chemistry</h4> <h6>Lehman College - Bronx, NY</h6>
              <h6>August 2012 to June 2016</h6>
            </details>
          </Col>
        </Row>
        <details open className="mb-5">
          <summary>
            <h3>Working Experience</h3>
          </summary>
          <h4>Software Developer Tutor/Coach</h4>{" "}
          <h6>SNHU ONLINE CAMPUS - Indianapolis, IN</h6>
          <h6>January 2021 to Present</h6>
          <ResponTut />
          <h4>Store Supervisor/Logistics</h4>{" "}
          <h6>Brooks Brothers - New York, NY</h6>
          <h6>March 2013 to 2020</h6>
          <ResponRet />
          <h4>US Marine Corp / Corporal of Marines</h4>{" "}
          <h6>Camp Lejeune, NC</h6>
          <h6>January 2008 to 2014</h6>
          <ResponMil />
        </details>
      </div>
    </Container>
  );
}
export default Resume;
