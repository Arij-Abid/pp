import {
  mobile,
  backend,
  creator,
  web,
  download,
  javascript,
  linkedin,
  isitcom,
  typescript,
  html,
  ploytechnique,
  redux,
  gpro,
  shop,
  tailwind,
  mastere,
  LOGO_TT,
  leymax,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  timeless,
  ecommerce,
  tripguide,
  devops,
} from "../assets";


export const navLinks = [
  

  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },

];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full stack ",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "reactjs",
    icon: reactjs,
  },



  
  {
    name: "Node JS",
    icon: nodejs,
  },


  {
    name: "mongodb",
    icon: mongodb,
  },
 
  {
    name: "docker",
    icon: docker,
  },
  
  {
    name: "redux",
    icon: redux,
  },

  {
    name: "timeless",
    icon: timeless,
  },

  {
    name: "git",
    icon: git,
  },
 
];


const experiences = [

  

  {
    title: "Full Stack Web Developer ",
    icon: gpro,
    company_name: "GPRO CONSULTING",
    iconBg: "#E6DEDD",
    date: "01/02/2023 - 01/06/2023",
    points: [

      "Developed a production monitoring web application using Full Stack Angular/Spring Boot.",
     " Set up a continuous integration (CI) chain as part of the DevOps approach.",
      "Created Dockerfiles for the Back-End and Front-End, and generated Docker images.",
      "Orchestrated Back-End and Front-End deployments via automated pipelines.",
      "Ensured data security and confidentiality.",
      "Implemented RESTful web services.",
      "Designed and maintained relational databases.",
      "Integrated modules for managing users, production orders, production stages, categories, products, and customers.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "GPRO CONSULTING",
    icon: gpro,
    iconBg: "#383E56",
    date: "01/07/2022 - 01/09/2022",
    points: [
      "Developed REST web services",
      "Set up an integration and deployment pipeline",
      "Implemented a robust authentication system with JWT and Spring Security",
      "Integrated modules for managing courses, lessons, teachers, and students",

    ],
  },
  {
    title: "Internship for the End of Studies in Professional Master's Degree in Web and Multimedia Services",
    icon: mastere,
    company_name: "ADSCOM Solutions",
    iconBg: "#E6DEDD",
    date: "01/03/2022 - 01/07/2022",
    points: [
      "Designed and executed the branding for a travel agency",
       "Created a 2D explanatory video",
       "Developed a graphic charter."
    ],
  },

  {
    title: "Full Stack Web Developer - Internship PFA",
    icon:LOGO_TT,
    company_name: "Tunisie Telecom",
    iconBg: "#E6DEDD",
    date: "15/07/2021 - 15/08/2021",
    points: [
      "Developed a web application for online auctions",
    ],
  },

  {
    title: "Full Stack Web Developer - End-of-Studies Internship",
    icon:leymax,
    company_name: "Leymax",
    iconBg: "#E6DEDD",
    date: "15/07/2021 - 15/08/2021",
    points: [
    "Developed a web application for project management",
    "Integrated modules for task management, events, employees, and chat between collaborators."
    ],
  },
  
];
const projects = [

  {
    name: "E-commerce ",
    description:
      "Our online e-commerce site offers a wide range of products to meet all your needs. Discover computer equipment, smartphones, beauty products, accessories, sports, and pet supplies",
    tags: [
      {
        name: "MERN stack",
        color: "blue-text-gradient",
      },
      {
        name: "React,nodejs,mongodb,Tailwindcss",
        color: "pink-text-gradient",
      },
    
    ],
    image: shop,
    source_code_link: "https://github.com/Arij-Abid/shopApp",
  },

  {
    name: "Web application for production tracking",
    description:
      "Developed a web application using Full Stack Angular/Spring Boot, Implemented a continuous integration (CI) pipeline as part of a DevOps approach",
    tags: [
      {
        name: "Angular, Spring boot, MySQL, Jenkins, Docker",
        color: "pink-text-gradient",
      },
  
    ],
    image: devops,
    source_code_link: "https://github.com/Arij-Abid/productionApp",
  },


  {
    name: "My portfolio website",
    description:
      "My portfolio website features interactive 3D experiences built with Three.js",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS, Email JS",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
  },
  
];

export { services, technologies,experiences, projects };



