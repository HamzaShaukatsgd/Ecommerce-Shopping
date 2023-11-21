import {
  ArrowLeftOutlined,
  ArrowRightAltOutlined,
  ArrowRightOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";
import { ApiSlides } from "../apifolder/SliderApi";
import "./Slider.css"

const Slider = () => {
  // UseState Hooks
  const [slides] = useState(ApiSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  // Style
  const arrowstyle =
    "rounded-full flex justify-center items-center shadow-sm hover:cursor-pointer bg-gray";

    // function

   const nextslide=()=>{
      if(activeSlide===slides.length-1)
      {
        setActiveSlide(0)
      }
      else{
        setActiveSlide(activeSlide+1);
      }
    }
    const previousslide=()=>{
      if(activeSlide===0)
      {
        setActiveSlide(slides.length-1);
      }
      else{
        setActiveSlide(activeSlide-1);
      }
    }

  // Return
  return (
    <div className="parentdiv h-[540px] bg-white flex justify-between items-center mobile:hidden">
      {/* Left Arrow */}
      <div className={arrowstyle} onClick={previousslide}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }}  />
      </div>
      {/* Slide */}
      {slides.map((slide, index) => {
         if (index === activeSlide) {
          return (
            <div className={` wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative `+slide.background} key={index}>
              <div className="slide flex items-center justify-center h-[100%">
                <div className=" forimg flex-1 h-[100%] flex  justify-center items-center">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                  />
                </div>
                <div className="descImg flex flex-col flex-1 justify-center place-items-start ml-11 ">
                  <h2 className="text-[50px]">
                    {slide.content.h2}
                  </h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          );
         }
      })
       }
      {/* Right Arrow */}
      <div className={arrowstyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick={nextslide} />
      </div>
    </div>
  );
};

export default Slider;
