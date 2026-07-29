import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { arij_abid, download, CV_Abid_ARIJ, linkedin, github } from "../assets"; // Ensure linkedin and github are imported

const ServiceCard = ({ index, title, icon, link }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={icon}
            alt={title}
            className='w-20 h-20 object-contain'
          />
        </a>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Get to know me
        </p>
        <h2 className={styles.sectionHeadText}>Who Am I.</h2>
      </motion.div>

      <div className='mt-10 flex flex-col md:flex-row items-center gap-10'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='text-secondary text-[17px] max-w-3xl leading-[30px] flex-1'
        >
          I'm a web developer with a passion for the new challenges of application development.<br />
          A true Swiss Army knife, I'm highly adaptable, curious, and open-minded.<br />
          I'm sure I'll fit in well with IT teams and bring my own vision to the table.
        </motion.p>

        <motion.div
          variants={fadeIn("right", "", 0.1, 1)}
          className='flex-shrink-0'
        >
          <img
            src={arij_abid}
            alt="Abid Arij"
            className="w-[180px] h-[180px] rounded-2xl shadow-[6px_7px_5px_1px_#623eb0,12px_13px_3px_0px_#623eb0] hover:shadow-lg transition-all ease-linear hover:translate-x-1 hover:translate-y-1"
          />
        </motion.div>
      </div>

      <div className='flex flex-col md:flex-row items-center gap-8 mt-10'>
        <a href={CV_Abid_ARIJ} download style={{ color: '#915EFF' }} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded-full hover:pl-10 hover:pr-6 bg-gray-50 group">
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black-100"><b>Download Resume (CV)</b></span>
          &nbsp; <img src={download} width="20px" alt="download" />
        </a>
        <div className='flex gap-6 mt-2'>
        <a
  href="https://www.linkedin.com/in/arij-abid/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative flex items-center justify-center w-12 h-12 rounded-full border-[1px] border-gradient-to-br from-purple-500 via-yellow-500 to-blue-500 p-[1px] rounded-[20px] shadow-card"
>
  <span className="absolute inset-0 border-[1px] border-transparent rounded-full"></span>
  <div className="absolute inset-0 rounded-full bg-[rgba(145,94,255,0.25)]"></div>
  <img src={linkedin} alt="LinkedIn" className="relative w-8 h-8 rounded-full" />
</a>



  <a href={"https://github.com/Arij-Abid"} target="_blank" rel="noopener noreferrer" 
  className="flex items-center justify-center bg-[rgba(145,94,255,0.25)] w-12 h-12 rounded-full border-[1px] border-gradient-to-br from-purple-500 via-yellow-500 to-blue-500"
  >
    
    <img src={github} alt="GitHub" className='w-8 h-8' />
  </a>
</div>


      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
