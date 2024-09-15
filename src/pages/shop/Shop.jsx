
import bannerImg from '../../assets/banner.png'
import Products from './Products'

const Shop = () => {
  return (
    <section className="min-h-screen">
      {/* banner section for shop */}
      <div className="w-full h-[400px] bg-cover bg-center flex items-center justify-center" style={{backgroundImage: `url(${bannerImg})`}}>
        <h1 className='text-white text-4xl '>Shop our Best Product</h1>
      </div>
      <Products headline="What You want"/>
    </section>
  )
}

export default Shop