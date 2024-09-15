import Products from "../shop/Products"
import Choose from "./Choose"
import Experiences from "./Experiences"
import Hero from "./Hero"
import Materials from "./Materials"


const Home = () => {
  return (
    <div>
      <Hero/>
      <Choose/>
      <Products headline="Best Selling Prpducts"/>
      <Experiences/>
      <Materials/>
    </div>
  )
}

export default Home