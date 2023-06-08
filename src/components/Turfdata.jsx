import React, { useEffect, useState } from "react";
import { db } from "../firebase-config/config";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "@chakra-ui/react";
import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";
import {Link as RouterLink} from "react-router-dom"
import { TimeSelectModal } from "./TimeSelectModal";

export const Turfdata = (prop) => {
  const { turf } = prop;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [element,setElement] = useState({})
  const [time,setTime] = useState("")
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true);
    const ref = collection(db, turf);
    const getData = async () => {
      try {
        const turfData = await getDocs(ref);
        const filterData = turfData.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(filterData);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [turf]);
   console.log(time,element)
   localStorage.setItem("time",time)
  if (loading) {
    return <div id="turfContainer">
         <Loading/>;
      </div>
  }
  
  return (
    <div>
      <p id="headingTurf">Turf Available for {turf}</p>
      <div id="turfContainer">
        {data.map((ele) => {
          return (
            <div id="turfBox">
              <div id="listingImg">
                <img src={ele.image} alt="" />
              </div>
              <p id="turfName">{ele.name}</p>
              <p id="turfAddress">{ele.address}</p>
              <TimeSelectModal turf={turf} element={ele} setElement={setElement} setTime={setTime} id={ele.id}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};
