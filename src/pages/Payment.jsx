import React, { useEffect, useState } from 'react'
import "../style/payment.css"
import {IoMdArrowRoundBack} from "react-icons/io"
import { Link } from 'react-router-dom'
import { useUserAuth } from '../context/Authcontext'
import {  ref, onValue } from "firebase/database";
import { database } from '../firebase-config/config'
import { Checkbox,Button, Text} from '@chakra-ui/react'
import { PopoverProfile } from '../components/Popover'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export const Payment = () => {
  const {user} = useUserAuth();
  const [name,setName] = useState("")
  const [time,setTime] = useState("")
  const getUserData = (uid) => {
       const userRef = ref(database,"users/"+ uid);
       onValue(userRef,(snapshot)=>{
        const data = snapshot.val();
        const bookingName = data.data
        setName(bookingName.booking.name)
        setTime(bookingName.time)
       })
  }
  useEffect(()=>{
    if(user){
      getUserData(user.uid)
    }
  })
  console.log(name)
  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  return (
    <div id='paymentContainer'>
          <div id="paymentNav">
            <Link to={"/turf"}>
             <IoMdArrowRoundBack fontWeight={"bold"} fontSize="30px"/>
             </Link>
             <p id='BookedTurfName'>{name}</p>
             <PopoverProfile email={user.email}/>
          </div>
          <div id='paymentContainerBox'>
            <div id='paymentMode'>
            <Text fontWeight={"bold"} fontSize="25px">Pay Now</Text>
             <Checkbox>Pay with QR</Checkbox>
             <Checkbox>Pay with Cash</Checkbox>
      <Button
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onOpen()
        }}
        colorScheme="red"
      >
        Select
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Order Booked</ModalHeader>
          <ModalBody>
            <Text>Thanks for booking {name}</Text>
            <Text>Time : {time}</Text>
          </ModalBody>
          <ModalFooter>
            <Link to="/turf">
            <Button onClick={onClose}>Close</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
             </div>
          </div>
    </div>
  )
}
