import ProductCards from "@/components/layouts/ProductCards"
import p1 from "public/p1.png"
import p2 from "public/p2.png"
import p3 from "public/p3.png"
import {Badge} from "@/components/ui/badge"
import Swiper from "@/components/layouts/Slider"

const Products = () => {
  return (
    <div className = "flex flex-col items-center mt-10">
      <Badge className = "text-blue-700 font-extrabold text-center bg-white hover:bg-white">PRODUCTS</Badge>
      <p className = "font-sans font-bold text-center text-4xl text-zinc-800">Check What We Have</p>
      <div className = "flex justify-evenly items-center mt-14">
          <ProductCards img={p1} title = "Brushed Raglan Sweatshirt" price = {195}/>
          <ProductCards img={p2} title = "Cameryn Sash Tie Dress" price = {545}/>
          <ProductCards img={p3} title = "Flex Sweatshirt" price = {175}/>
      </div>
    </div>
  )
}

export default Products