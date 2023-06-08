import React,{useState,useEffect} from 'react'
import {IoMdArrowRoundBack} from "react-icons/io"
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/Authcontext'
import {  ref, onValue } from "firebase/database";
import { database } from '../firebase-config/config'
import { Checkbox,Button, Popover,Text} from '@chakra-ui/react'
import { PopoverProfile } from '../components/Popover';
export const Bookings = () => {
  const {user,logout} = useUserAuth();

  const [name,setName] = useState("")
  const [image,setImage] = useState("")
  const [add,setAdd] = useState("")
  const [time,setTime] = useState("")
  const [email,setEmail] = useState("")
  const [error,setError] = useState("")
  const getUserData = (uid) => {
       const userRef = ref(database,"users/"+ uid);
       onValue(userRef,(snapshot)=>{
        const data = snapshot.val();
        if(data===null){
          setError("No orders found")
        }else{
          const bookingName = data.data
          setName(bookingName.booking.name)
          setImage(bookingName.booking.image)
          setAdd(bookingName.booking.address)
          setTime(bookingName.time)
          setEmail(bookingName.email)
        }
       })
  }
  useEffect(()=>{
    if(user){
      getUserData(user.uid)
    }
  })
  // const handleLogout = async () => {
  //   try {
  //     await logout();
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  return (
    <div>
       <div id="paymentNav">
            <Link to={"/turf"}>
               <IoMdArrowRoundBack fontWeight={"bold"} fontSize="30px"/>
             </Link>
             <Text color={"red"} fontSize="30px" fontWeight={"bold"}>Orders</Text>
        </div>
        {
          error==="" ? <div id='bookingsDetails'>
          <p id='BookedTurfName'>Current Booking</p>
          <p>{name}</p>
          <img src={image} alt="" />
          <p>Address : {add}</p>
          <p>Time : {time}</p>
      </div> : <div id='errorOrder'>
         <Text fontSize={"50px"} textAlign="center" marginTop={"50px"} fontWeight="bold">No Bookings</Text>
        </div>
        }
        
    </div>
  )
}
