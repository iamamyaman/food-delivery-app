import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import {BiArrowBack} from "react-icons/bi";
import {MdDeleteSweep} from "react-icons/md"
import { useStateValue } from "./Context/StateProvider";
import CartItem from "./CartItem";
import emptyCart from "../img/emptyCart.svg"

const CartContainer = ()=>{
const [{showCart,cartItems,user},dispatch] = useStateValue();
const [flag, setFlag] = useState(1);
const [total,setTotal] = useState();

const cartView = ()=>{
    dispatch({
        type:"SET_SHOW_CART",
        showCart :!showCart
    })
}

const clearCart = ()=>{
    dispatch({
        type:"SET_CARTITEMS",
        cartItems :[]
    });
    localStorage.setItem('cartItems',JSON.stringify([]));
    
}

useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item) {
      return accumulator + item.qty * item.price;
    }, 0);
    setTotal(totalPrice);
  }, [total,flag,cartItems]);

    return(
        <motion.div className="w-full md:w-375 h-screen flex flex-col justify-between absolute top-0 right-0 z-[100] bg-gradient-to-tr from-orange-500 to-main shadow-lg"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x:200 }}
        >
          <div className="flex justify-between items-center text-white pt-3 px-5">
            <BiArrowBack className="cursor-pointer border-2 p-1 rounded-full text-2xl hover:bg-white hover:text-main" onClick ={cartView}/>
            <p className="text-xl font-semibold">Cart</p>
            <p 
              className="text-sm flex items-center gap-1 cursor-pointer border-2 p-1 rounded-lg hover:bg-white hover:text-main"
              onClick={clearCart}>
                Clear <MdDeleteSweep/>
            </p>
          </div>

          <div className="w-full h-[92%] overflow-y-scroll bg-white rounded-tl-3xl rounded-tr-3xl flex flex-col items-center justify-between text-white shadow-2xl">
            <div className="flex flex-col gap-2 w-full h-full px-5 items-center mt-5 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400 scrollbar-thumb-main">
            {
              cartItems && cartItems.length >0
                    ?
                    <>
                    {
                        cartItems.map((item)=>{
                            return(
                                <CartItem data={item} flag={flag} setFlag={setFlag}/>
                            )
                        })
                    }
                    </>
                    :  
                     <div className="h-full w-full flex flex-col gap-10 justify-center items-center">
                         <img src={emptyCart} className="w-[80%]"></img>
                        <h1 className="text-black">NO ITEMS IN THE CART</h1>
                     </div>
                }
            </div>
            <div className="flex flex-col w-full h-[30%] bg-gray-200 px-5 py-5 text-sm gap-3 text-gray-500">
              <div className="flex justify-between">
                  <p>Sub Total</p>
                  <p>{total}$</p>
              </div>
              <div className="flex justify-between ">
                  <p>Delivery</p>
                  <p>2$</p>
              </div>
              <hr className="bg-gray-300"></hr>
              <div className="flex justify-between font-semibold text-lg text-gray-600">
                  <p>Total</p>
                  <p>{total +2}$</p>
              </div>
              {user 
              ?
                <motion.button 
                    className="w-full text-white bg-gradient-to-tr from-orange-400 to-orange-600 opacity-95 hover:opacity-100 hover:shadow-lg p-4 rounded-3xl"
                    whileTap={{scale:0.9}}>
                    Order Now
                </motion.button>
              :
                <motion.button 
                className="w-full  text-white bg-gradient-to-tr from-gray-400 to-gray-500 opacity-95 p-4 rounded-3xl"
                disabled
                >
                Login to Order
                </motion.button >
              }
            </div>
            
           </div>
        </motion.div>
    )
}


export default CartContainer;