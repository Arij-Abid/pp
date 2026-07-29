const styles = {
  heroHeadText: "font-black text-white lg:text-[40px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText: "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  sectionHeadText: "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  sectionSubTextWork: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center",
  sectionHeadTextWork : "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center",

  sectionSubTextExperience: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center",
  sectionHeadTextExperience: "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center",


  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  /* Ajoutez ceci dans votre fichier CSS global ou dans un fichier CSS spécifique à ce composant */
  sectionTec :"background-color: transparent", 

  downloadButtonContainer: "mt-8 justify-start",

//
responsiveCanvas: "w-full h-[60vh] sm:h-[70vh] md:h-[80vh] relative",
responsiveContainer: "w-full h-full flex justify-center items-center",
mobileCanvas: "h-[50vh] w-full",
mobileCanvasContainer: "flex flex-col justify-end items-center mt-25", // Adjust margin-top if needed
// Additional styles for mobile
  mobileStyles: {
    paddingX: "px-4",
    paddingY: "py-4",
    padding: "px-4 py-6",
    heroHeadText: "font-black text-white text-[30px] leading-[70px]",
    heroSubText: "text-[#dfd9ff] font-medium text-[14px] leading-[30px]",
    sectionHeadText: "text-white font-black text-[24px]",
    sectionSubText: "text-[12px]",
    downloadButtonContainer: "mt-8 justify-center",
  }
};

export { styles };
