import React,{useEffect} from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import heroImage from "../img/hero-image.png";
import { heroData } from "../utils/data";
import {AiOutlineThunderbolt} from "react-icons/ai";
import { getAllFoodItems } from "../utils/firebaseFunction";
import { useStateValue } from "./Context/StateProvider";

const HeroContainer = () => {
  const[{foodItems},dispatch] = useStateValue();

  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-center justify-center gap-4 md:gap-8 md:items-start">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold ">
            Super Fast Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain animate-spin-slow"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] text-center md:text-left font-bold tracking-wide leading-tight md:leading-[95px] text-headingColor">
          Blazing Fast Delivery in
          <span className="text-main text-[3rem] lg:text-[6rem] flex items-center justify-center md:justify-start">
            Your C<AiOutlineThunderbolt/>TY
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[70%]">
          Get your favorite food deliver at your doorstep in less than 20 minutes.<b> Order now on www.hotbit.com!!</b>
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-main to-red-500 text-white  focus:bg-red-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className=" flex-1 flex items-start relative">
        <img src ={heroImage} className="w-full h-full object-contain animate-slide"></img>
      </div>
     
     
    </section>
  );
};

export default HeroContainer;