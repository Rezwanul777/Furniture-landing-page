/* eslint-disable react/prop-types */
import Button from "../../components/Button"
import expriencesImg from "../../assets/expricences.png"
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../utils/animation";

const Experiences = ({product}) => {
  return (
    <section className='my-24 section-container flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8'>
        <motion.div 
        variants={SlideUp(product?.delay)}
        initial="hidden"
        whileInView={"visible"}
          
           className='md:w-1/2 md:h-[547px]'>
            <img src={expriencesImg} alt="" className='h-full w-full' />
        </motion.div>
        <motion.div
        variants={SlideLeft(product?.delay)}
        initial="hidden"
        whileInView={"visible"}
        className='md:w-1/2 mx-auto'>
            <h3 className='text-lg font-semibold text-primary mb-4'>Experiences</h3>
            <h2 className='text-4xl font-bold mb-4 capitalize lg:w-2/3'>we provide you the best experience</h2>
            <p className='text-secondary dark:text-white mb-5 lg:w-2/3 text-justify'>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            <Button text="More Info"/>
        </motion.div>
    </section>
  )
}

export default Experiences