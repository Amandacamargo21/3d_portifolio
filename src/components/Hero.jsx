/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Amanda</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a fullstack developer with <br className="sm:block hidden"/>
          experience in creating <br className="sm:block hidden"/>
          attractive and accessible user <br className="sm:block hidden"/>
          interfaces for web and mobile <br className="sm:block hidden"/>
          devices. My passion for web <br className="sm:block hidden"/>
          development started when I <br className="sm:block hidden"/>
          began learning HTML and CSS <br className="sm:block hidden"/>
          on my own, and now I am <br className="sm:block hidden"/>
          constantly seeking to learn new <br className="sm:block hidden"/>
          technologies to adapt to <br className="sm:block hidden"/>
          market needs and offer <br className="sm:block hidden"/>
          applications with everincreasing quality. <br className="sm:block hidden"/>
          </p>
        </div>
      </div>
      
      <ComputersCanvas />
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y:[0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
    </div>

    </section>
  )
}

export default Hero