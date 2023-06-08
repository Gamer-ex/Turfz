import React, { useEffect } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,useDisclosure,Text
  } from '@chakra-ui/react'
  import {Link as RouterLink} from "react-router-dom"
import { useUserAuth } from '../context/Authcontext'
import { loadBundle } from 'firebase/firestore'
import { getDatabase, ref, set } from "firebase/database";
import { database } from '../firebase-config/config'

  const time = ["5:00 AM","7:00 AM","9:00 AM","4:00 PM","6:00 PM","8:00 PM","10:00AM"]
export const TimeSelectModal = (prop) => {
    const {turf,element,setElement,setTime,id} = prop
    const {user} = useUserAuth();

      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayTwo />)
    

    const handleElement = (ele) => {
         setElement(ele)
    }
    const bookedTime = localStorage.getItem("time",time)
    console.log(bookedTime)


    // add bookings to user account
    function writeUserData(data) {
        set(ref(database,'users/'+user.uid),{
            data
        })
    }
    const addBookings = async(ele) => {
        try{
           const userAuth = await user;
           var bookingData ={
            booking:element,
            time:ele,
            uid:userAuth.uid,
            email:userAuth.email
           }
           writeUserData(bookingData)
           console.log("added")
        }catch(err){
            console.log(err)
        }
    }
  
  return (
    <>
    <Button
     colorScheme={"red"}
      onClick={() => {
        handleElement(element)
        onOpen()
      }}
    >
      Book Now
    </Button>
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      {overlay}
      <ModalContent>
        <ModalHeader>Timings For {turf}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight={"bold"} fontSize="25px">Select Time</Text>
          <div id='timeButtons'>
            {
            time.map((ele)=>{
                return <Button colorScheme={"red"} onClick={()=>{setTime(ele);addBookings(ele);}}><RouterLink to={"/payment"}>{ele}</RouterLink></Button> 
            })
            }
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}
