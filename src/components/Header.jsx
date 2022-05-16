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
import CartContainer from "./CartContainer";


const Header =()=>{
    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [{user,cartNum},dispatch] = useStateValue();
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
        <div className="fixed z-50 w-screen p-3 px-4 bg-inherit md:p-4 md:px-16">
            <div className="hidden md:flex w-full h-full justify-between">
                <Link to ="/" className="flex items-center gap-2">
                    <img src={Logo} alt ="logo" className="w-28 object-cover"></img>
                </Link>
                <div className="flex justify-center items-center gap-8">
                    <ul className="flex items-center gap-10">
                        <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer" 
                          onClick = {()=>setIsMenu(false)}
                        >
                          <Link to ="/">Home</Link>
                        </li>
                        <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer" onClick = {()=>setIsMenu(false)}>Order</li>
                        <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer" onClick = {()=>setIsMenu(false)}>Menu</li>
                        <li className="text-base text-textColor hover:text-headingColor transition-all duration-100 ease-in-out cursor-pointer" onClick = {()=>setIsMenu(false)}>Contact</li>
                    </ul>
                    <div className="flex relative justify-center items-center text-textColor text-2xl cursor-pointer hover:text-headingColor">
                      <MdShoppingBasket/>
                      <div className="h-4 w-4 text-white bg-cartNumBg rounded-full flex justify-center items-center absolute -top-3 -right-0.5">
                          <p className="text-xs">{0}</p>
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
                    <motion.div 
                       initial={{opacity:0,scale:0.6}}
                       animate={{opacity:1,scale:1}}
                       exit={{opacity:0,scale:0.6}}
                       className="w-36 absolute bg-white shadow-xl rounded-lg right-0 top-11 cursor-pointer">
                        {
                         user.email==='iemamyaman007@gmail.com'
                        &&
                            <Link 
                              to ="/admin" 
                              className="px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out rounded-tl-lg rounded-tr-lg flex gap-1 items-center justify-center"
                              onClick = {()=>setIsMenu(false)}>
                                Add Item
                                <MdAdd/>
                            </Link>
                        }
                        <p 
                          className="px-4 py-2 hover:bg-gray-100 transition-all duration-100 ease-in-out rounded-bl-lg rounded-br-lg flex gap-3 items-center justify-center"
                          onClick={logout}
                          >
                            Logout
                            <MdOutlineLogout/>
                        </p>
                    </motion.div>
}
                    </div>
                     
                    
                </div>

            </div>

            {/* {Mobile Menu} */}
            <div className="flex justify-between items-center md:hidden w-full h-full">
              <Link to ="/" className="flex items-center gap-2">
                  <img src={Logo} alt ="logo" className="w-20 object-cover"></img>
              </Link>

              <div className="flex gap-3 items-end">
                <div className="flex relative justify-center items-center text-textColor text-3xl cursor-pointer hover:text-headingColor">
                    <MdShoppingBasket/>
                      <div className="h-4 w-4 text-white bg-cartNumBg rounded-full flex justify-center items-center absolute -top-3 -right-0.5">
                          <p className="text-xs">{0}</p>
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
                      <motion.div 
                        initial={{opacity:0,scale:0.6}}
                        animate={{opacity:1,scale:1}}
                        exit={{opacity:0,scale:0.6}}
                        className="w-36 absolute bg-white shadow-xl rounded-lg right-0 top-11 cursor-pointer">
                          {
                          user.email==='iemamyaman007@gmail.com'
                          &&
                              <Link to ="/admin" 
                                className="px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out rounded-tl-lg rounded-tr-lg flex gap-1 items-center justify-center"
                                onClick = {()=>setIsMenu(false)}
                                >
                                  Add Item
                                  <MdAdd/>
                              </Link>
                          }
                          
                          <ul className="flex flex-col items-center w-full">
                            <li className="w-full text-base text-textColor hover:text-headingColor px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out cursor-pointer" onClick = {()=>setIsMenu(false)}>Home</li>
                            <li className="w-full text-base text-textColor hover:text-headingColor px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out cursor-pointer" onClick = {()=>setIsMenu(false)}>Order</li>
                            <li className=" w-full text-base text-textColor hover:text-headingColor px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out cursor-pointer" onClick = {()=>setIsMenu(false)}>Menu</li>
                            <li className=" w-full text-base text-textColor hover:text-headingColor px-4 py-2 hover:bg-slate-100 transition-all duration-100 ease-in-out cursor-pointer" onClick = {()=>setIsMenu(false)}>Contact</li>
                          </ul>
                          <p 
                            className="px-4 py-2 bg-gray-100 m-2 rounded-lg hover:bg-gray-200 transition-all duration-100 ease-in-out flex gap-3 items-center justify-center"
                            onClick={logout}
                            >
                              Logout
                              <MdOutlineLogout/>
                          </p>
                      </motion.div>
  }
                      </div>
              </div>
            </div>
            <CartContainer/>
            </div>
    )
}

export default Header;