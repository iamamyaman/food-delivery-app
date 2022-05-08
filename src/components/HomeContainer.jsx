import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import heroImage from "../img/hero-image.png";
import { heroData } from "../utils/data";
import {AiOutlineThunderbolt} from "react-icons/ai"

const HomeContainer = () => {
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
          className="bg-gradient-to-br from-main to-red-500 text-white w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className=" flex-1 flex items-start relative">
        <img src ={heroImage} className="w-full h-full object-contain animate-slide"></img>
        {/* <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-5 left-0 flex items-center justify-center lg:px-20  py-2 gap-2 lg:gap-y-6 lg:gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="w-150 lg:w-225 relative p-4 pt-10 md:pt-14 md:animate-move bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="absolute w-20 lg:w-36 -top-8 lg:-top-20"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3 text-center">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span> {n.price}
                </p>
              </div>
            ))}
        </div> */}
      </div>
    </section>
  );
};

export default HomeContainer;