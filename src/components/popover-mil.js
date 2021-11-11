import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Button } from "react-bootstrap";
function ResponMil() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h4">Responsibilities</Popover.Title>
      <Popover.Content>
        <li>Rank: E-4/Corporal </li>
        <li>MOS: 0481/ Logistics Field </li>
        <li>Train, lead a squad of Marines</li>
        <li>Shipping and receiving of Military supplies</li>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="success" style={{ marginBottom: "5vh" }}>
        click to see Responsibilities
      </Button>
    </OverlayTrigger>
  );
}
export default ResponMil;
