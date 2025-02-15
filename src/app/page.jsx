"use client"

import Image from "next/image";
import { motion } from "framer-motion";
const Homepage = () => {

  return (
    <motion.div className="h-full" initial={{y : "-200vh"}} animate={{y:"0vh"}} transition={{duration:1}}>
    <div className="h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-lg">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw" className="object-contain"/>
      </div>

      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Crafting Digital Experiences, Designing Tomorrow.
        </h1>
        
        {/* DESC */}
        <p className="md:text-xl">
          Welcome to my digital canvas, where innovation and creativity
          converge. With a keen eye for aesthetics and a mastery of code, my
          portfolio showcases a diverse collection of projects that reflect my
          commitment to excellence.
        </p>
        
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-2 rounded-lg ring-1 ring-black bg-black text-white transition hover:bg-gray-800">
            View My Work
          </button>
          <button className="p-2 rounded-lg ring-1 ring-black transition hover:bg-gray-100">
            Contact Me
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Homepage;
