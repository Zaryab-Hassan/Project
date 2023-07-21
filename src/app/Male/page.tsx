import GenderProducts from "@/components/layouts/GenderProducts"
import p9 from "public/p9.png"
import p10 from "public/p10.png"

const page = () => {
  return (
    <div className = "grid grid-cols-4 gap-4 mt-16 mb-16">
        <GenderProducts img = {p9} title = "Flex Push Button Bomber" tag = "Jackets" price = {225}/>
        <GenderProducts img = {p10} title = "Raglan Sweatshirt" tag = "Sweater" price = {195}/>
    </div>
  )
}

export default page