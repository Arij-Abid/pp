import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { linkedin, github, logo } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_wxtk8h8',
        'template_xpi8hsk',
        {
          from_name: form.name,
          to_name: "Arij",
          from_email: form.email,
          to_email: "abidarij1@gmail.com",
          message: form.message,
        },
        'isDZbXJINMR1kHPA9'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const xl = true; // Vous devez définir la valeur de 'xl' ici

  return (
    <>
      <div
        className={`${
          xl ? 'mt-12' : ''
        } grid xl:grid-cols-2 grid-cols-1 gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <div className='flex flex-col gap-6'>
            <div className='flex justify-between items-center'>
              <img src={logo} alt='logo' className='w-14 h-14 rounded-full' />
                       


              <div className='flex flex-col items-start ml-4'>
                <p className='text-left'></p>
                <div className='flex gap-4 mt-2'>
                  <a href={"https://www.linkedin.com/in/arij-abid/"} target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className='w-10 h-10' />
                  </a>
                  <a href={"https://github.com/Arij-Abid"} target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className='w-10 h-10' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What would you like to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      <br />

      <div className='text-white font-medium text-center my-8'>
      © 2024 by Abid Arij ❤️. All rights reserved.
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
