import React from "react";
import { bannerImg } from "../../assets/index";
import { motion } from "framer-motion";

const RightBanner = () => {
  return (
    <>
      <div className="w-full lgl:w-1/2  flex justify-center items-center relative">
        <motion.div
          className="min-h-screen flex w-[300px] h-[300px] lgl:w-[400px] lgl:h-[400px] gap-12 justify-center items-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ ease: "easeInOut", type: "spring" }}
        >
          <div className="w-full h-full rounded-2xl rotate-45 overflow-hidden shadow-cyan-400/50 shadow-xl flex justify-center items-center">
            <img
              className="-rotate-45 scale-100 w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
              src={bannerImg}
              alt=""
            />
          </div>
          {/* <div className="w-[200px] h-[200px] rounded-2xl rotate-45 overflow-hidden shadow-cyan-400/50 shadow-xl"> */}
            {/* <img className='-rotate-45 scale-100 ' src={TechBrained} alt="" /> */}
          {/* </div> */}
        </motion.div>
        {/* <img
          className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[680px] z-10"
          src={bannerImg}
          alt=""
        /> */}
      </div>
      {/* <motion.div
        className="absolute bottom-[-600px] right-450 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-bodyColor shadow-shadowOne flex justify-center items-center"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", type: "spring" }}
      ></motion.div> */}

      {/* <motion.div className='absolute w-[350px] h-[300px] rounded-2xl rotate-45 overflow-hidden shadow-yellow-400/50 shadow-xl'
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ ease: "easeInOut", type: "spring" }}>
        <img className='rotate-45 scale-100 ' src={bannerImg} alt="" />
       </motion.div> */}
    </>
  );
};

export default RightBanner;
