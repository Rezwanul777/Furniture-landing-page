/* eslint-disable react/prop-types */

import {  FiPlus } from "react-icons/fi"
import Ratings from "../../components/Ratings"
import { getImageUrl } from "../../utils/getImage"


const ProductCard = ({product}) => {
  return (
    <div>
        <div className="bg-[#FAFAFA]">
            <img src={getImageUrl(`${product.imageUrl}`)} alt="" />
        </div>
        <div className="p-6 bg-white dark:bg-black shadow-sm">
          <h3 className="text-base mb-1">{product.category}</h3>
          <h4 className="text-xl mb-2 font-semibold">{product.name}</h4>
          <Ratings rating={product.rating}/>
          <div className="flex justify-between items-center mt-5">
            <p className="text-secondary dark:text-white font-bold text-lg space-x-1">
              <span>${product.price}</span>
            </p>
            <button className="bg-secondary hover:bg-black/65 p-2 rounded-full text-white">
            <FiPlus />
            </button>
          </div>
        </div>
    </div>
  )
}

export default ProductCard