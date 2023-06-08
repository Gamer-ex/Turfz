import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import { auth } from "../firebase-config/config";

const userAuthContext = createContext();


export function UserAuthContextProvider({children}){
    const [user,setuser] = useState({})
    // signup function
    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
    }
    function logout(){
        return signOut(auth)
    }
    function googleSignin(){
        const googleAuthprovider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthprovider)
    }
    // handleing errors wether user is valid or not
    // whenever the component is mounted we have this onauthStatechanger to setState of user and whenever the component is unmounted we dont want to listen this function anymore

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setuser(currentUser)
        });
        // cleanup 
        return ()=>{
            unsubscribe()
        }
    },[])
    return(
        <userAuthContext.Provider value={{user,signup,login,logout,googleSignin}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext)
}