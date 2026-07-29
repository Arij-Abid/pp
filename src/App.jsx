import { BrowserRouter } from "react-router-dom";



import { About, Hero, Navbar, Contact,Tech , Feedbacks,Experience,StarsCanvas, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Feedbacks /> 

   <div className='relative z-0'>
   <Experience />
 
        <Tech />
        <Works />

        <Contact/>
        <StarsCanvas />

</div>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
