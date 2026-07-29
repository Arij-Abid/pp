import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { ploytechnique, isitcom } from "../assets";



const FeedbackCard = ({
  testimonial,
  designation,
  adresse,
  company,
  icon,
}) => (
  <motion.div
    variants={fadeIn("", "spring", 0.5, 0.75)} // Adjusted index handling for static data
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <img
      src={icon} // Ensure 'icon' is a valid image source
      alt={`feedback_by-${company}`}
      className='w-20 h-20 object-cover'
    />

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='mt-1 text-secondary text-[15px]'>
            {designation} {company}
          </p>
          <br />
          <p className='mt-1 text-secondary text-[15px]'>
            {adresse}
          </p>
          <br />
        </div>
      </div>
    </div>
  </motion.div>
);


const Feedbacks = () => {
  const staticTestimonials = [
    {
      testimonial: "National Engineer's Degree in Computer Engineering",
      designation: "2020- 2023",
      company: "Polytechnic School",
      icon: ploytechnique,
      adresse: "Sousse, Tunisia",
    },
    {
      testimonial: "Master's Degree in Professional Web and Multimedia Services",
      designation: "2020- 2022",
      company: "ISITCOM – Higher Institute of Computer Science and Communication Technologies",
      icon: isitcom,
      adresse: "Hammam Sousse, Tunisia",
    },
    {
      testimonial: "Diploma in Applied License in Computer Science Multimedia and Web Technology",
      designation: "2017-2020",
      company: "ISITCOM – Higher Institute of Computer Science and Communication Technologies",
      icon: isitcom,
      adresse: "Hammam Sousse, Tunisia",
    },
  ];

  return (
    <div id="education" className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {staticTestimonials.map((testimonial, index) => (
          <FeedbackCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

