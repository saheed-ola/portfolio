import React from "react";
import { bannerImg } from "../../assets/index";
import { motion } from "framer-motion"

const RightBanner = () => {
  return (
    <>
      <div className="w-1/2  flex justify-center items-center relative">
        <img className="w-[500px] h-[680px] z-10" src={bannerImg} alt="" />
      </div>
      <motion.div className="absolute top-[315px] right-40 w-[500px] h-[500px] bg-bodyColor shadow-shadowOne flex justify-center items-center" initial ={{scale: 0}} whileInView={{scale:1}} transition={{ease:"easeInOut", type:"spring", }}></motion.div>
    </>
  );
};

export default RightBanner;
