import Hero from "@/views/Hero"
import Products from "@/views/Products"
import Promotions from "@/views/Promotions"
import Unique from "@/views/Unique"
import Newsletter from "@/views/Newsletter"

export default function Home() {
  return (
    <div className = "">
    <Hero/>
    <Promotions/>
    <Products/>
    <Unique/>
    <Newsletter/>
    </div>
  )
}
