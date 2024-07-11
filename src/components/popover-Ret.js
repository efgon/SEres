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
          Lead a team of developers to achieve goals using the Agile Method.
        </li>
        <li>
          Successfully build and develop a Web App for monitoring AV components
          using Angular and Django Rest framework stack.
        </li>
        <li>Creating powerful REST API's.</li>
        <li>
          Managed Cloud base services such as Azure and AWS to host or launch
          services.
        </li>
        <li>
          Programming hardware and mini computers such as Raspberry Pi to
          perform a continuous task with python and their OS (Raspbian, Linux).
        </li>
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
