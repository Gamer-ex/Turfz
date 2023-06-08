import React from "react";
import homebg from "../images/bgimg.png"
import navLogo from "../images/navlogo.png"
import loginsignupBtn from "../images/loginsignup.png"
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

export const HomeNav = () => {
  return (
    <>
      <div id="Home">
        <div id="bgImg">
          <img src={homebg} alt="homebg" />
        </div>
        <div id="homenav">
          <div id="navLogo">
           
            <img src={navLogo} alt="navlogo" />
    
          </div>
          <div id="loginSignupBtn">
          <Link to={"/login"}>
            <Button colorScheme={"red"}>LOGIN/SIGNUP</Button>
            </Link>
          </div>
        </div>
        <div id="homeTxt">
          <p>
            FIND AND BOOK YOUR NEAREST{" "}
            <span style={{ color: "red" }}>TURF</span> JUST A CLICK AWAY!
          </p>
        </div>
      </div>
    </>
  );
};
