import React from "react";
// import {BiLogoFacebookCircle,BiLogoInstagram,BiLogoLinkedinSquare} from "react-icons/bi"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div id="footer">
      <div>
        <p id="footerText">
          FIND AND BOOK YOUR NEAREST <span style={{ color: "red" }}>TURF</span>{" "}
          JUST A CLICK AWAY!
        </p>
      </div>
      <div id="iconsContainer">
        <div id="icons">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </div>
  );
};
