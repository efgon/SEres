import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Button } from "react-bootstrap";
function ResponRet() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h4">Responsibilities</Popover.Title>
      <Popover.Content>
        <li>
          Managed daily operations, administrative duties, scheduling, keyholder
        </li>
        <li>Trained, develop and managed store employees</li>
        <li>Inventory report and merchandising</li>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success">Responsibilities</Button>
    </OverlayTrigger>
  );
}
export default ResponRet;
