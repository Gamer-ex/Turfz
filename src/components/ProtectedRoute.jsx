import React from 'react'
import {Navigate} from "react-router-dom"
import { useUserAuth } from '../context/Authcontext';

export const ProtectedRoute = ({children}) => {
    let {user} = useUserAuth();
   if(!user){
    return <Navigate to="/"/>
   }else{
    return children
   }
}
