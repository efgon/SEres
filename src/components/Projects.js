import NavBar from "./NavBar";
import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Button } from "react-bootstrap";
import chapter from "../img/Screenshot from 2021-08-25 22-04-52.png";
import todo from "../img/todo.png";
//import { Redirect } from "react-router";

function Projects() {
  return (
    <div className="resume-header">
      <NavBar />
      <CardGroup>
        <Card className="mx-5 mt-5 mb-5" style={{}}>
          <Card.Img variant="top" src={chapter} style={{}} />
          <Card.Body style={{}}>
            <Card.Title>-Second Chapter-</Card.Title>
            <Card.Text>
              Lite App for resale of books. Built using the MERN stack.
              (MongoDB, Express, React, Node.js)
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              onClick={() =>
                (window.location.href =
                  "https://efgon.github.io/kapstone-frontend-book-resale/")
              }
            >
              Go to Site
            </Button>
          </Card.Footer>
        </Card>
        <Card className="mx-5 mt-5 mb-5">
          <Card.Img variant="top" src={todo} />
          <Card.Body>
            <Card.Title>-Lite To-Do App-</Card.Title>
            <Card.Text>
              Lite To-Do app. Small project to show use of state in React.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              href="https://efgon.github.io/lite-todo-app/"
            >
              Check it out!
            </Button>
          </Card.Footer>
        </Card>
        {/* <Card className="mx-5 mt-5 mb-5">
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Tower of Hanoi</Card.Title>
            <Card.Text>
              Basic game of Tower of Hanoi. Built using vanilla JavaScript
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary">Go somewhere</Button>
          </Card.Footer>
        </Card> */}
      </CardGroup>
    </div>
  );
}
export default Projects;
