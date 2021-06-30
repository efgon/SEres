import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Button } from "react-bootstrap";
function ResponTut() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h4">Responsibilities</Popover.Title>
      <Popover.Content>
        <li>Part of the SNHU Kenzie Academy Coaching Program</li>
        <li>Hold 1-1 online tutoring/coaching session with students.</li>
        <li>Hold software engineering online workshops</li>
        <li>Assist facilitators/instructors when needed</li>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <Button variant="success">click to see Responsibilities</Button>
    </OverlayTrigger>
  );
}
export default ResponTut;
