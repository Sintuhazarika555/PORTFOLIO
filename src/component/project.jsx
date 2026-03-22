import React, { useRef, useEffect, useState } from 'react'; 
import { motion, useScroll, useTransform } from 'framer-motion';
import MIP from './imgP/MIP.jpg'
import GG from './imgP/GG.png'
import VRS from './imgP/VRS.png'

const Project = () => {
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      const screenWidth = window.innerWidth;
      setScrollDistance(-(containerWidth - screenWidth + 40));
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const xTransform = useTransform(scrollYProgress, [0, 1], [0, scrollDistance]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] w-screen">
      <div className="bg-linear-to-r from-blue-900/80 to-blue-1000 sticky top-0 flex h-screen items-center overflow-hidden px-8">

        <div className="absolute top-10 left-8">
          <h2 className="lg:ml-5 text-7xl font-extrabold text-blue-100 w-full">
            MY <span className=' text-blue-500'>PROJECTS</span>
          </h2>
          <p className="lg:ml-5 mt-3 mb-3  text-sm uppercase tracking-[0.25em] text-blue-100/90 font-medium">
            A curated showcase of my hand-crafted digital items
          </p>
        </div>
        

        <motion.div
          ref={containerRef}
          style={{ x: xTransform }}
          className="flex gap-8 px-10 pt-10 lg:pt-0 "
        >


          <a href='https://shazar-styleground.netlify.app/'>
            <div className="border-8 border-blue-500 flex flex-col bg-blue-500 hover:bg-blue-300 hover:border-blue-300 shadow-lg shadow-blue-500/60 overflow-hidden rounded-[2vw] w-[80vw] md:w-112.5 shrink-0">
              <div className="h-80 bg-white min-h-auto bg-cover bg-no-repeat " style={{ backgroundImage: `url(https://raw.githubusercontent.com/Sintuhazarika555/StyleGround/refs/heads/main/StyleGroundSS/Screenshot%202026-01-17%20180720.png)` }}>            </div>
              <div className="p-4 text-black ">
                <h3 className="text-white font-bold text-xl">StyleGround</h3>
                <p>INDIVIDUAL PROJECT</p>
              </div>
            </div>
          </a>

          <a href='https://github.com/Sintuhazarika555/virtu-fit'>
            <div className="border-8 border-blue-500 flex flex-col bg-blue-500 hover:bg-blue-300 hover:border-blue-300 shadow-lg shadow-blue-500/60 overflow-hidden rounded-[2vw] w-[80vw] md:w-112.5 shrink-0">
              <div className="h-80 bg-white min-h-auto bg-cover bg-no-repeat bg-top " style={{ backgroundImage: `url(https://raw.githubusercontent.com/Sintuhazarika555/virtu-fit/refs/heads/main/Screenshot%202026-01-17%20175027.png)` }}>            </div>
              <div className="p-4 text-black ">
                <h3 className="text-white font-bold text-xl">VirtuFit</h3>
                <p>INDIVIDUAL PROJECT</p>
              </div>
            </div>
          </a>

          <a href='https://github.com/Sintuhazarika555/MockInterviewPlatform'>
            <div className="border-8 border-blue-500 flex flex-col bg-blue-500 hover:bg-blue-300 hover:border-blue-300 shadow-lg shadow-blue-500/60 overflow-hidden rounded-[2vw] w-[80vw] md:w-112.5 shrink-0">
              <div className="h-80 bg-white min-h-auto bg-cover bg-no-repeat " style={{ backgroundImage: `url(${MIP})` }}>            </div>
              <div className="p-4 text-black ">
                <h3 className="text-white font-bold text-xl">MockInterviewPlatform</h3>
                <p>GROUP PROJECT</p>
              </div>
            </div>
          </a>

          <a href='https://github.com/Sintuhazarika555/GraphGeneratorPy'>
            <div className="border-8 border-blue-500 flex flex-col bg-blue-500 hover:bg-blue-300 hover:border-blue-300 shadow-lg shadow-blue-500/60 overflow-hidden rounded-[2vw] w-[80vw] md:w-112.5 shrink-0">
              <div className="h-80 bg-black min-h-auto bg-contain bg-no-repeat" style={{ backgroundImage: `url(${GG})` }}></div>
              <div className="p-4 text-black ">
                <h3 className="text-white font-bold text-xl">GraphGenerator</h3>
                <p>COLLEGE PROJECT</p>
              </div>
            </div>
          </a>


          <a href='https://github.com/Sintuhazarika555/VaccinationRegistrationSystem'>
            <div className="border-8 border-blue-500 flex flex-col bg-blue-500 hover:bg-blue-300 hover:border-blue-300 shadow-lg shadow-blue-500/60 overflow-hidden rounded-[2vw] w-[80vw] md:w-112.5 shrink-0">
              <div className="h-80 bg-white min-h-auto bg-contain " style={{ backgroundImage: `url(${VRS})` }}></div>
              <div className="p-4 text-black ">
                <h3 className="text-white font-bold text-xl">VaccinationRegistrationSystem</h3>
                <p>COLLEGE PROJECT</p>
              </div>
            </div>
          </a>

          <a href='https://github.com/Sintuhazarika555/Bot-clipArt'>
            <div className="border-8 border-blue-500 flex flex-col bg-blue-500 hover:bg-blue-300 hover:border-blue-300 shadow-lg shadow-blue-500/60 overflow-hidden rounded-[2vw] w-[80vw] md:w-112.5 shrink-0">
              <div className="h-80 bg-white min-h-auto bg-cover bg-no-repeat " style={{ backgroundImage: `url(https://raw.githubusercontent.com/Sintuhazarika555/Bot-clipArt/refs/heads/main/Screenshot%202026-01-31%20004857.png)` }}></div>
              <div className="p-4 text-black ">
                <h3 className="text-white font-bold text-xl">BOT-ClipArt</h3>
                <p>CSS STUFF </p>
              </div>
            </div>
          </a>

          <a href='https://github.com/Sintuhazarika555/Gun-clipArt'>
            <div className="border-8 border-blue-500 flex flex-col bg-blue-500 hover:bg-blue-300 hover:border-blue-300 shadow-lg shadow-blue-500/60 overflow-hidden rounded-[2vw] w-[80vw] md:w-112.5 shrink-0">
              <div className="h-80 min-h-auto  bg-black bg-size-[100%_auto] bg-no-repeat " style={{ backgroundImage: `url(https://raw.githubusercontent.com/Sintuhazarika555/Gun-clipArt/refs/heads/main/Screenshot%202026-01-31%20004916.png)` }}></div>
              <div className="p-4 text-black ">
                <h3 className="text-white font-bold text-xl">GUN-ClipArt</h3>
                <p>CSS STUFF </p>
              </div>
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Project;