import React from "react";
import { useState } from "react";
import Logo from "../img/logo.png";
import {MdShoppingBasket} from "react-icons/md";
import Avatar from "../img/avatar.png"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebaseConfig'
import { useStateValue } from "./Context/StateProvider";

const Header =()=>{
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    
    
   const login = async()=>{
    const response = await signInWithPopup(firebaseAuth, provider);
    console.log(response);
   }
//   .then((result) => {
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         const user = result.user;
//         setUser(user);
    
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const email = error.email;
//     const credential = GoogleAuthProvider.credentialFromError(error);
//   })};

    return(
        <div className="fixed z-50 w-screen p-4 px-16 bg-inherit">
            <div className="hidden md:flex w-full h-full justify-between">
                <Link to ="/" className="flex items-center gap-2">
                    <img src={Logo} alt ="logo" className="w-28 object-cover"></img>
                </Link>
                <div className="flex justify-center items-center gap-8">
                    <ul className="flex items-center gap-8 ">
                        <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">Home</li>
                        <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">Order</li>
                        <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">Menu</li>
                        <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer">Contact</li>
                    </ul>
                    <div className="flex relative justify-center items-center text-textColor text-2xl cursor-pointer hover:text-headingColor">
                    <MdShoppingBasket/>
                    <div className="h-4 w-4 text-white bg-cartNumBg rounded-full flex justify-center items-center absolute -top-3 -right-0.5">
                        <p className="text-xs">2</p>
                    </div>
                    </div>
                    <div onClick={login} className="relative">
                    <motion.img 
                        whileTap={{ scale: 0.8 }} 
                        src ={Avatar} 
                        className="w-10 shadow-lg rounded-full cursor-pointer"
                    />
                    </div>
                </div>

            </div>
            
            <div className="flex md:hidden w-full h-full"></div>
        </div>
    )
}

export default Header;