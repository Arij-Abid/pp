import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { stars } from "../assets";

const TypewriterText = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText(prevText => currentText.slice(0, prevText.length + 1));
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayText('');
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, 2000); // Delay before next typing cycle
        }
      }
    }, 100); // Typing speed

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, isTyping, texts, displayText]);

  return (
    <div className="typewriter-container">
      <p className="typewriter-text mt-2 text-white text-lg">
        I am a {displayText}
        {isTyping && <span className="typewriter-cursor">|</span>}
      </p>
    </div>
  );
};

const Hero = () => {
  const textOptions = [
    'Full-stack developer',
    'quick learner',
    'problem solver',
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <section id="home" className={`relative w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} ${styles.responsiveHero} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex flex-col items-center'>
          <span className="flex items-center p-2 text-white font-semibold border border-[#915EFF] rounded-full bg-transparent mb-4">
            <img src={stars} width="30px" alt="Icon" className="mr-2" />
            Welcome to my Portfolio
          </span>
          <h1 className={`${isMobile ? styles.mobileStyles.heroHeadText : styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>ARIJ</span>
          </h1>
          <TypewriterText texts={textOptions} />
        </div>
      </div>

      <div className={`w-full ${isMobile ? styles.mobileCanvasContainer : styles.responsiveCanvas}`}>

        <ComputersCanvas />
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};



const App = () => {
  return (
    <div>
      <Hero />
      {/* Other components or sections of your app */}
    </div>
  );
};

export default App;
