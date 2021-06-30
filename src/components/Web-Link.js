import React from "react";
import twitter from "../img/43-twitter-512.png";
import linkedIn from "../img/linkedin_black_logo_icon_147114.png";
import github from "../img/25231.png";

function WebLinks() {
  return (
    <ul className="web-link-logos">
      <li>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/efren-gonzalez-5aa67bb4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="linkedIn-logo" width="50vh"></img>
        </a>
      </li>
      <li>
        {"  "}
        <a
          className="App-link"
          href="https://github.com/efgon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="github-logo" width="50vh"></img>
        </a>
      </li>
      <li>
        {" "}
        <a
          className="App-link"
          href=" https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter-logo" width="50vh"></img>
        </a>
      </li>
    </ul>
  );
}
export default WebLinks;
