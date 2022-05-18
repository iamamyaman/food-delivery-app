import React,{useState,useEffect} from "react";
import { motion } from "framer-motion";
import {MdAddShoppingCart} from "react-icons/md"
import Loader from "./Loader";
import { useStateValue } from "./Context/StateProvider";

const FoodItemContainer= ({data})=>{
    const[{cartItems},dispatch] = useStateValue();

    const [items, setItems] = useState([]);

  const addtocart = () => {
    dispatch({
      type: 'SET_CARTITEMS',
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

    return(
    <div className="w-full h-auto flex gap-2 py-2 flex-wrap justify-center">
        {data ?
            data?.map(item=>(
                <div className="w-150 h-auto min-w-150 md:w-300 md:min-w-300 flex flex-col md:flex-row items-center justify-between gap-2 p-3 md:p-5 bg-transparent rounded-lg shadow-lg backdrop-blur-lg hover:bg-white transition-all ease-in-out">
                   <motion.img src ={item.imageURL} className="h-24 md:h-28" whileHover={{scale:1.3}}/>
                   <div className="w-full flex flex-col justify-between items-center">
                       <div className="flex flex-col items-center md:items-center">
                        <p className="text-headingColor font-semibold">{item.title}</p>
                        <p className="text-headingColor text-xs text-center">{item.calories} Calories</p>
                       </div>
                       <div className="flex gap-3 items-center">
                          <p className="text-headingColor font-bold text-lg">
                              {item.price}<span className="text-main">$</span>
                          </p>
                          <motion.div 
                            className="w-6 h-6 p-1 rounded-full bg-main flex justify-center items-center cursor-pointer hover:opacity-90" 
                            whileTap={{scale:0.8}}
                            onClick ={()=>setItems([...cartItems,item])}
                            >
                            <MdAddShoppingCart className="text-white"/>
                          </motion.div>
                       </div>
                   </div>

                </div>
            ))

            : <Loader/>
        }
       
    </div>
    )
}

export default FoodItemContainer;