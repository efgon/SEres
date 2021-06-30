import React from "react";
import img from "../img/IMG_3220.jpg";
import WebLinks from "./Web-Link";
import LetterP from "./Letter-of-P";
function Header() {
  return (
    <div className="App-header">
      <header className="header">
        <img className="my-img" src={img} alt="" />

        <h6>
          "Former Marine and Logistics Manager looking to make a transition into
          the tech field. Seeking a position where I can use my excellent
          organization skills and newly acquired software engineer skills to
          create, develop, troubleshoot, Q/A new product."
        </h6>

        <WebLinks />
      </header>
      <LetterP />
    </div>
  );
}
export default Header;
