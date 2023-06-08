import React, { useState } from "react";
import turfbg from "../images/turfbg.jpg";
import logo from "../images/navlogo.png";
import "../style/turf.css";
import {BiSolidCricketBall,BiCricketBall,BiFootball,BiSolidEditLocation} from "react-icons/bi"
import {IoFitness} from "react-icons/io5"
import {IoIosBasketball} from "react-icons/io"
import {GiTennisRacket} from "react-icons/gi"
import {MdLocationOn} from "react-icons/md"
import { Button, Popover } from "@chakra-ui/react";
import { useUserAuth } from "../context/Authcontext";
import { PopoverProfile } from "./Popover";

export const TurfNav = (prop) => {
    const {setTurf} = prop
    const { user, logout } = useUserAuth();

    const handleLogout = async () => {
      try {
        await logout();
      } catch (err) {
        console.log(err.message);
      }
    };
   
  return (
    <>
      <div id="turfnavbg">
        <img src={turfbg} alt="" />
      </div>
      <div id="turfNavContainer">
        <div id="topNavturf">
          <div id="turfNav">
            <img src={logo} alt="" />
          </div>
          <div id="navBtns">
            <PopoverProfile handleLogout={handleLogout} email={user.email}/>
          </div>
        </div>
        <div id="midNavTurf">
          <p>IT'S ALL STARTED HERE!</p>
          <p id="turfCity">
            Kottayam <MdLocationOn fontWeight={"bold"} />
          </p>
        </div>
        <div id="botNavTurf">
          <p id="botNavText">
            TURF Near your{" "}
            <span
              style={{
                color: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              LOCATION <MdLocationOn />
            </span>
          </p>
          <Button
            variant={"ghost"}
            color="red"
            fontSize={"2em"}
            fontWeight="bold"
            rightIcon={<BiCricketBall color="white" />}
            onClick={()=>setTurf("cricket")}
             colorScheme={"white"}
          >
            CRICKET
          </Button>
          <Button
            variant={"ghost"}
            color="red"
            fontSize={"2em"}
            fontWeight="bold"
            rightIcon={<BiFootball color="white" />}
            onClick={()=>setTurf("football")}
             colorScheme={"white"}
          >
            FOOTBALL
          </Button>
          <Button
            variant={"ghost"}
            color="red"
            fontSize={"2em"}
            fontWeight="bold"
            rightIcon={<IoIosBasketball color="white" />}
            onClick={()=>setTurf("basketball")}
             colorScheme={"white"}
          >
            BASKETBALL
          </Button>
          <Button
            variant={"ghost"}
            color="red"
            colorScheme={"white"}
            fontSize={"2em"}
            fontWeight="bold"
            rightIcon={<GiTennisRacket color="white" />}
            onClick={()=>setTurf("badminton")}
          >
            BADMINTON
          </Button>
        </div>
      </div>
    </>
  );
};
