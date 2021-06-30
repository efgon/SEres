import NavBar from "./NavBar";
import React from "react";
import ResponRet from "./popover-Ret";
import ResponTut from "./popover-tut";
import ResponMil from "./popover-mil";
// import Details from "react-details";

function Resume() {
  return (
    <div className="resume-header">
      <NavBar />
      <div className="resume">
        <h1 className="efren">Efren Gonzalez</h1>
        <h6>Newark, NJ 07103</h6>
        <h6>@: egonzalezgar@gmail.com</h6>
        <h6>#: (347) 602-0407</h6>
        <h2 className="developer"> Full-stack Software Engineer</h2>
        <h6>JavaScript, React, Node.js, Python, Django, MongoDB</h6>
        <details style={{ marginTop: "2rem" }} open>
          <summary>
            <h3>Objective</h3>
          </summary>
          <p>
            Former Marine and Logistics Manager looking to make a transition
            into the tech field. Seeking a position where I can use my excellent
            organization skills and newly acquired software engineer skills to
            create, develop, troubleshoot, Q/A new or existing product.
          </p>
        </details>
        <details>
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
          </ul>
        </details>
        <details>
          <summary>
            <h3>Working Experience</h3>
          </summary>
          <h4>Software Developer Tutor/Coach</h4>{" "}
          <h6>SNHU ONLINE CAMPUS - Indianapolis, IN</h6>
          <h6>January 2021 to Present</h6>
          <ResponTut />
          <h4>Assistant Store Manager</h4>{" "}
          <h6>Brooks Brothers - New York, NY</h6>
          <h6>March 2013 to 2020</h6>
          <ResponRet />
          <h4>US Marine Corp / Corporal of Marines</h4>{" "}
          <h6>Camp Lejeune, NC</h6>
          <h6>January 2008 to 2014</h6>
          <ResponMil />
        </details>
        <details>
          <summary>
            <h3>Education</h3>
          </summary>
          <h4>Software Engineering (front and back - end Certificate)</h4>{" "}
          <h6>SNHU/ Kenzie Academy - Indianapolis, IN</h6>
          <h6>October 2020 to October 2021</h6>
          <h4>Associate in Science (AS) in Chemistry</h4>{" "}
          <h6>CUNY Bronx Community College - Bronx, NY</h6>
          <h6>August 2012 to June 2014</h6>
        </details>
      </div>
    </div>
  );
}
export default Resume;
