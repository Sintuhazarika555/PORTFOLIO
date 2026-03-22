import React from 'react';
import {motion , useScroll, useTransform} from "framer-motion" ;
import BgImage from './bg2.jpeg'; 
import { useRef } from 'react';

const Front = () => {
  return (
    <section
      id="home"
      className="relative flex w-full min-h-screen bg-cover bg-center items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0"></div>
      <motion.div 
      className="relative z-10 w-full animate-[bounce_2s_ease-in-out_1.5] flex flex-col items-center justify-center p-8 text-white">
      <motion.div >
        <motion.h3 
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="text-4xl md:text-5xl font-medium">I am,</motion.h3>
        <motion.h1 
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 2.5,
          duration: 1,
        }}
        className="text-5xl md:text-8xl font-black text-blue-800 tracking-tighter uppercase">
          Sintu <br /> Hazarika
        </motion.h1>
        <motion.p
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          delay: 3,
          duration: 1,
        }} 
        className="text-lg md:text-xl mt-6 max-w-2xl leading-relaxed">
          Currently pursuing <span className='font-bold text-blue-400'>AI/ML</span> and having foundational knowledge in <span className='font-bold text-blue-400'>Full-Stack Development & UI/UX Design</span>.
        </motion.p>
      </motion.div>
      
      </motion.div>
    </section>
  );
};

export default Front;