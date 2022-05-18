import React, { useState } from "react";
import { categories } from "../utils/data";
import {IoFastFoodSharp} from "react-icons/io5";
import { motion } from "framer-motion";
import FoodItemContainer from "./FoodItemContainer";
import { useStateValue } from "./Context/StateProvider";
import Loader from "./Loader";


const MenuContainer = ({data}) => {
 const[selected,setSelected] = useState("chicken");
 const [{foodItems,cartItems }, dispatch] = useStateValue();

    return(
        <div className="w-full my-10 flex flex-col items-center">
           <div className=" text-xl md:text-3xl text-headingColor font-bold mt-10 mb-8 md:mt-20 relative before:absolute before:rounded-lg before:content before:w-60 before:h-1 before:-bottom-2 before:left-[50%] before:-translate-x-1/2 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100" >
                <h2 className="text-center pb-2 uppercase">ORDER YOUR FAVORITE FOOD</h2>
            </div>
            <div className="w-full flex justify-center gap-3 overflow-x-scroll scrollbar-none py-1 pl-32 sm:pl-0 ">
                {
                    categories && categories.map((category)=>{
                        return(
                            <motion.div 
                                whileTap={{scale:0.75}}
                                key={category.id}
                                className={`group ${selected===category.urlParamName ? "bg-main" : "bg-white"} w-20 min-w-[80px] py-5 flex flex-col gap-3 items-center justify-center bg-white shadow-md rounded-lg cursor-pointer hover:bg-main`}
                                onClick={()=>setSelected(category.urlParamName)}
                            >
                                <div className={`flex justify-center items-center p-2 ${selected===category.urlParamName ? "bg-white" : "bg-main"} group-hover:bg-white rounded-full shadow-md`}>
                                    <IoFastFoodSharp className={`text-sm ${selected===category.urlParamName ? "text-main" : "text-white"} group-hover:text-main`}/>
                                </div>
                                <p className={`text-xs uppercase font-semibold ${selected===category.urlParamName ? "text-white" : "text-black"} group-hover:text-white`}>{category.urlParamName}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
            {
            data && data ?
                (<div className="w-full mt-5">
                  <FoodItemContainer
                  data={foodItems?.filter((n) => n.category == selected)}
                />
                </div>)
            : <Loader/>
}
        </div>
    )
}

export default MenuContainer;