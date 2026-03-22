import React from 'react'
import logo from './logo.jpg';
import { motion} from 'framer-motion';
const Nav = () => {
  return (
    <nav className="bg-transparent top-0 w-full flex flex-col md:flex-row justify-between items-center p-7 z-50 ">

      <motion.div
        initial={{
          scale: 0,
          rotate: 360,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="font-bold text-xl ">
        <img
          src={logo}
          alt="Company Logo"
          className="h-30 w-30 animate-[spin_3s_linear_infinite] rounded-full object-cover shadow-md border-2"
        />
      </motion.div>

      <motion.ul

        className="sticky top-0 flex flex-row gap-10 mt-2 md:mt-0 text-white  font-bold">
          
        <motion.li
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            delay: 1,
            duration:0.5,
          }}
          className='hover:text-blue-400'>
          <a href="#home">HOME</a></motion.li>

        <motion.li
          initial={{
            scale: 0,
            
          }}
          animate={{
            scale: 1,
            
          }}
          transition={{
            delay: 1.5,
            duration:0.5,
          }}
          className='hover:text-blue-400'>
          <a href="#skills">SKILLS</a></motion.li>
        <motion.li
          initial={{
            scale: 0,
            
          }}
          animate={{
            scale: 1,
            
          }}
          transition={{
            delay: 2,
            duration:0.5,
          }}
          className='hover:text-blue-400'>
          <a href="#projects">PROJECTS</a></motion.li>
      </motion.ul>

    </nav>
  )
}

export default Nav