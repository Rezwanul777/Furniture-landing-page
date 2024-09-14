import { FaSearch } from "react-icons/fa"
import bannerImg from "../../assets/banner.png"
import TooltipButton from "../../components/TooltipButton"

const Hero = () => {
  return (
    <section className="h-screen relative  bg-cover bg-center text-white" style={{backgroundImage: `url(${bannerImg})`}}>
      <div className="px-2 relative md:pt-32 pt-20 mx-auto space-y-8 w-1/2 text-center">
        <h1 className="text-4xl lg:text-5xl font-medium lg:leading-tight leading-snug ">Make your interior more
        minimalistic & modern</h1>
        <p className="font-normal lg:w-1/2 mx-auto">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
        {/* input search filed */}
        <div className="relative inline-block z-30">
          <input type="text" placeholder="Search furniture" className="w-full lg:w-80 mx-auto px-6 py-2 rounded-full bg-white/20 text-white border border-gray-300 focus:outline-none" />
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
    </section>
  )
}

export default Hero