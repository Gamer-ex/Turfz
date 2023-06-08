import React from 'react'
import {Route,Routes} from "react-router-dom"
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Signup } from '../pages/Signup'
import { UserAuthContextProvider} from '../context/Authcontext'
import { TurfzListing } from '../pages/TurfzListing'
import { ProtectedRoute } from '../components/ProtectedRoute'
import { Payment } from '../pages/Payment'
import { Bookings } from '../pages/Bookings'

export const AllRoutes = () => {
  return (
    <UserAuthContextProvider>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path="/turf" element={<ProtectedRoute>
            <TurfzListing/>
       </ProtectedRoute>}/>
       <Route path="/payment" element={<Payment/>}/>
       <Route path="/booking" element={<Bookings/>}/>
    </Routes>
    </UserAuthContextProvider>
  )
}
