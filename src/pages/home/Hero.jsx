import { FaSearch } from "react-icons/fa"
import bannerImg from "../../assets/banner.png"
import TooltipButton from "../../components/TooltipButton"
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion"



const Hero = () => {
  const [isScrollSpyVisible, setIsScrollSpyVisible] = useState(false);

// Function to scroll to the top
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

useEffect(() => {
  const handleScroll = () => {
    // Show the Scroll Spy button after scrolling 400px
    if (window.scrollY > 400) {
      setIsScrollSpyVisible(true);
    } else {
      setIsScrollSpyVisible(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <section className="h-screen relative  bg-cover bg-center text-white" style={{backgroundImage: `url(${bannerImg})`}}>
      <div className="px-2 relative md:pt-36 pt-20 mx-auto space-y-8 w-1/2 text-center">
        <motion.h1 className="text-4xl lg:text-5xl font-medium lg:leading-tight leading-snug "
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        
        >Make your interior more
        minimalistic & modern</motion.h1>
        <p className="font-normal lg:w-1/2 mx-auto">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        {/* input search filed */}
        <div className="relative inline-block z-30">
          <motion.input type="text" placeholder="Search furniture" className="w-full lg:w-80 mx-auto px-6 py-2 rounded-full bg-white/20 text-white border border-gray-300 focus:outline-none" 
          
          initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
          
          />
          <div className="absolute top-1/2 right-3 transform -translate-y-1/2 p-2 rounded-full bg-primary cursor-pointer">
            <FaSearch/>
          </div>
        </div>
        
      </div>
      {/* blur effect */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent  blur-sm">

        </div>

        {/* hover  button display tootlip */}

     
            <div className='hidden xl:block absolute bottom-36 left-24'>
                <TooltipButton position="bottom" />
            </div>
            <div className='hidden xl:block absolute bottom-72 left-96'>
                <TooltipButton position="bottom" />
            </div>
            <div className='hidden xl:block absolute bottom-24 right-[680px]'>
                <TooltipButton position="bottom" />
            </div>

             {/* dark and light mode */}
             <div className="absolute bottom-16 right-16 z-40">
                <button
                    onClick={toggleTheme}
                    className="focus:outline-none font-bold text-lg bg-black text-white p-5 rounded-full "
                >
                    {isDarkMode ? <BsSun className="text-yellow-300" /> : <BsMoon />}
                </button>
            </div>
            {/* Scroll Spy Button */}
      {isScrollSpyVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-24 bg-primary/90 text-white p-3 rounded-full shadow-lg hover:bg-secondary/55 transition duration-500 delay-300  ease-in-out"
        >
          <FaArrowUp />
          {/* <img src={logo} alt="" className="h-6 w-6 rounded-full"/> */}
        </button>
      )}
    
    </section>
  )
}

export default Hero