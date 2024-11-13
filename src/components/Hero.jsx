import { HERO_CONTENT } from "../constants";
import profileImage from "../assets/ice_Parinwat.jpg";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

const container = (delay) => ({
  hidden: { x: -100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-2xl lg:text-3xl lg:mt-16"
            >
              <TypeAnimation
                sequence={["Ice Parinwat", 1000, "Web Developer", 1000]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Junior Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-3xl"
              src={profileImage}
              alt="Ice_Parinwat"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
