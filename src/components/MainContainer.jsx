import React
 from "react";
import { useStateValue } from "./Context/StateProvider";
import FoodItemContainer from "./FoodItemContainer";
import HeroContainer from "./HeroContainer";
import MenuContainer from "./MenuContainer";

const MainContainer =()=>{
    const [{foodItems},dispatch] = useStateValue();
    
    
    return(
      <div className="w-full h-auto flex flex-col">
        <HeroContainer/>
        <div className=" text-xl md:text-3xl text-headingColor font-bold mt-10 mb-8 md:mt-20 relative before:absolute before:rounded-lg before:content before:w-40 before:h-1 before:-bottom-2 before:left-[50%] before:-translate-x-1/2 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100" >
          <h2 className="text-center pb-2 uppercase">Straight from the farm</h2>
        </div>
        <FoodItemContainer data={foodItems?.filter(item=>item.category==="fruits")}/>
        <MenuContainer data={foodItems}/>
      </div>
    )
}

export default MainContainer;