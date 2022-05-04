import React from "react";
import { useState } from "react";
import Logo from "../img/logo.png";
import {MdShoppingBasket,MdAdd,MdOutlineLogout} from "react-icons/md";
import Avatar from "../img/avatar.png"
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebaseConfig'
import { useStateValue } from "./Context/StateProvider";

const Header =()=>{
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{user},dispatch] = useStateValue();
    const [isMenu, setIsMenu] = useState(false);
    console.log(user);
    
    const login = async () => {
        if(!user){
          const {
            user: { refreshToken, providerData },
          } = await signInWithPopup(firebaseAuth, provider);
          dispatch({
            type: "SET_USER",
            user: providerData[0],
          });
          localStorage.setItem('user',JSON.stringify(providerData[0]))
        }
        else{
          setIsMenu(!isMenu);
        }
      };

      const logout = () => {
        setIsMenu(false);
        localStorage.clear();
    
        dispatch({
          type: "SET_USER",
          user: null,
        });
      };


    return(
        <AnimatePresence>
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
                    <div className="relative">
                    <motion.img 
                        whileTap={{ scale: 0.6 }} 
                        src ={user ? user.photoURL : Avatar} 
                        className="w-10 shadow-lg rounded-full cursor-pointer"
                        alt="userprofile"
                        onClick={login}
                    />
                    {
                    isMenu &&
                    <div className="w-36 absolute bg-white shadow-xl rounded-lg right-0 top-11 cursor-pointer">
                        {
                         user.email==='iemamyaman007@gmail.com'
                        &&
                            <Link to ="/admin" className="px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out rounded-tl-lg rounded-tr-lg flex gap-1 items-center justify-center">
                                Add Item
                                <MdAdd/>
                            </Link>
                        }
                        <p 
                          className="px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out rounded-bl-lg rounded-br-lg flex gap-3 items-center justify-center"
                          onClick={logout}
                          >
                            Logout
                            <MdOutlineLogout/>
                        </p>
                    </div>
}
                    </div>
                     
                    
                </div>

            </div>
            
            <div className="flex md:hidden w-full h-full"></div>
        </div>
        </AnimatePresence>
    )
}

export default Header;