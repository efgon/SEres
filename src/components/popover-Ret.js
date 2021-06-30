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
          Managed daily operations, administrative dutiesmargin-bottom,
          scheduling and sales
        </li>
        <li>Trained, develop and managed store employees</li>
        <li>Inventory report and merchandising</li>
        <li>Opened and closed the store at end of day</li>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="hover" placement="right" overlay={popover}>
      <Button variant="success">click to see Responsibilities</Button>
    </OverlayTrigger>
  );
}
export default ResponRet;
