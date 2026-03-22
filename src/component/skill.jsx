import React from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const skill = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0% 20% 0% 20%)", "inset(0% 0% 0% 0%)"]
  )

  return (
    <motion.section id="skills"
      ref={ref}
      style={{
        width: '100vw',
        clipPath
      }}
      className=" p-8 rounded-t-4xl bg-blue-100/10 border-t-4 border-blue-600"
    >

      <h1 className="text-white text-6xl font-extrabold mb-2 ml-5">TECH <span className=' text-blue-500'>STACK</span> </h1>
      <p className="mt-2 text-white uppercase tracking-[0.2em] text-sm ml-5">
        The architecture behind my digital craftsmanship
      </p>

      <div className="grid h-auto items-center justify-center">
        <div className="flex justify-center">
        </div>
        <motion.div
          className="flex h-auto items-center gap-4 overflow-auto px-8 custom-scrollbar ">
          <section className="py-20 px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8  p-3">

              <div className="flex flex-col gap-3">
                <h3 className="text-blue-500 font-bold mb-2"> CORE LANGUAGES</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">C</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">C++</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">PYTHON</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">JAVASCRIPT</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-blue-500 font-bold mb-2"> WEB DEV</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">HTML</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">CSS</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">REACT</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">TAILWIND</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-blue-500 font-bold mb-2"> AI & DATA SCIENCE</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">NUMPY</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">PANDAS</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">OPENCV</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">MATPLOTLIB</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-blue-500 font-bold mb-2"> DATABASES & TOOLS</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">MYSQL</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">MONGODB</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">GIT</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">ARDUINO</div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-blue-500 font-bold mb-2"> ANIMATION & DESIGN</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">GSAP</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">FRAMERMOTION</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">FIGMA</div>
                  <div className="italic text-blue-500 p-4 w-auto border rounded-2xl text-center text-xl font-bold">CANVA</div>
                </div>
              </div>

            </div>
          </section></motion.div>
      </div>



    </motion.section>
  )
}

export default skill

