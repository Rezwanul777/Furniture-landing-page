import Products from "../shop/Products"
import Choose from "./Choose"
import Experiences from "./Experiences"
import Hero from "./Hero"
import Materials from "./Materials"
import Testimonial from "./Testimonial"


const Home = () => {
  return (
    <div>
      <Hero/>
      <Choose/>
      <Products headline="Best Selling Prpducts"/>
      <Experiences/>
      <Materials/>
      <Testimonial/>
    </div>
  )
}

export default Home