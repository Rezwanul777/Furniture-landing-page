/* eslint-disable react/prop-types */

import Button from "../../components/Button"
import {  SlideRight } from "../../utils/animation"
import { motion } from "framer-motion";

const Choose = ({product}) => {
  return (
    <section className='section-container'>
        <motion.div 
        variants={SlideRight(product?.delay)}
        initial="hidden"
        whileInView={"visible"}
        
        className='my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center md:gap-12 gap-8 text-left '>
            <div className='text-4xl font-bold '>
            Why <br /> Choosing Us
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury facilities</h3>
                <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button text="More Info"/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury Shops</h3>
                <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button text="More Info"/>
            </div>
            <div>
                <h3 className='text-2xl font-semibold mb-3'>Luxury Clients</h3>
                <p className='text-base mb-2'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                <Button text="More Info"/>
            </div>
        </motion.div>
    </section>
  )
}

export default Choose