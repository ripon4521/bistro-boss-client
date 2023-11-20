import {  createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
// import { GoogleAuthProvider } from "firebase/auth";





export const AuthContext = createContext(null)

const auth = getAuth(app);
// const provider = new GoogleAuthProvider();
const Authprovider = ({children}) => {

  

    const [user ,setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const [loading,setloading]=useState(true)


    const createUser =(email,password)=>{
        setloading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    const sighnIn = (email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }

    const googleLogin = ()=>{
       setloading(true)

        return signInWithPopup(auth ,provider)
    }
    const updateuserProfile = (name , photo)=>{
        setloading(true)
     return   updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
  
   


    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, currentuser =>{
            setUser(currentuser )
            console.log('CURRENTuSER: ' , auth);
            setloading(false)
        })
        return()=>{
            return unsubscribe();
        }

        
    },[])
  
    const authInfo ={
        user,
        loading,
        createUser,
        sighnIn,
        logout,
        googleLogin,
        updateuserProfile
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;