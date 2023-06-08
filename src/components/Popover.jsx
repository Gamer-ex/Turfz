import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Text
} from "@chakra-ui/react";
import {AiOutlineUser } from "react-icons/ai";
import {Link} from "react-router-dom"
export const PopoverProfile = (prop) => {
  const {name,email,handleLogout,image} = prop
  return (
    <Popover>
      <PopoverTrigger>
        <Button colorScheme={"red"}>{<AiOutlineUser fontSize={"22px"}/>}</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight={"bold"} color="black">Welcome {email}</PopoverHeader>
        <PopoverBody display={"grid"} gap="20px">
            <Link to={"/booking"}>
            <Button colorScheme={"red"} width="100%">Bookings</Button></Link>
            <Button colorScheme={"red"} onClick={handleLogout}>Logout</Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
