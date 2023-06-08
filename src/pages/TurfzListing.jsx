import React, { useState } from "react";
import "../style/turf.css";
import { TurfNav } from "../components/TurfNav";
import { Turfdata } from "../components/Turfdata";
import { Footer } from "../components/Footer";



export const TurfzListing = () => {
  const [turf, setTurf] = useState("football");

  return (
    <div id="mainContainer">
      <TurfNav setTurf={setTurf} />
      {/* <MapContainer/> */}
      <Turfdata turf={turf} />
      <Footer />
    </div>
  );
};
