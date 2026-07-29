import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { html,css,javascript,typescript,figma,docker,reactjs,nodejs,mongodb,redux,timeless,git} from "../assets";



// Static list of technologies
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Figma", icon: figma },
  { name: "ReactJS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Docker", icon: docker },
  { name: "Redux", icon: redux },
  { name: "Timeless", icon: timeless },
  { name: "Git", icon: git },
];

const Tech = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Technical skills.</h2>
      </motion.div>
      <br /><br /><br />
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => {
          // Exclude problematic icons on mobile
          if (isMobile && ['html 5', 'css 3', 'javascript', 'typescript', 'reactjs', 'figma'].includes(technology.name.toLowerCase())) {
            return null;
          }
          return (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
