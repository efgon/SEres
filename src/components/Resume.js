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
        <h2 className="developer"> Full-Stack Software Engineer</h2>
        <h6>JavaScript, React, Angular, Python, Django, C++, SQL</h6>
        <details style={{ marginTop: "2rem" }} open>
          <summary>
            <h3>Summary</h3>
          </summary>
          <p>
            Full-Stack Software Engineer with 6+ years of experience with OOP
            languages such as Python and some of its frameworks (Django, Flask)
            also JavaScript, Node.js, React, Angular, C++, SQL. Experience with
            Cloud Services such as Microsoft Azure and AWS. Problem solver and
            great team player.
          </p>
          <p>
            Proven experience working with RESTful API's and databases such as
            SQL, MySQL.
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
                <li>Angular</li>
                <li>C++</li>
                <li>Git </li>
                <li>Chat GPT, AI</li>
                <li>SQL</li>
                <li>RESTful API's</li>
              </ul>
            </details>
          </Col>
          <Col sm>
            <details open>
              <summary>
                <h3>Education</h3>
              </summary>
              <h4>Software Engineer (Full-Stack)</h4>{" "}
              <h6>SNHU - Indianapolis, IN</h6>
              <h6>October 2019 to October 2021</h6>
              <h4>B.S. in Chemistry</h4> <h6>Lehman College - Bronx, NY</h6>
              <h6>August 2012 to June 2016</h6>
            </details>
          </Col>
        </Row>
        <details open className="mb-5">
          <summary>
            <h3>Working Experience</h3>
          </summary>
          <h4>Lead Software Engineer</h4>{" "}
          <h6>A-V Services inc - Fairfield, NJ</h6>
          <h6>December 2021 to Present</h6>
          <ResponRet />
          <h4>Software Developer Tutor/Coach</h4>{" "}
          <h6>SNHU ONLINE CAMPUS - Indianapolis, IN</h6>
          <h6>January 2021 to January 2023</h6>
          <ResponTut />
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
