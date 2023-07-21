import GenderProducts from "@/components/layouts/GenderProducts"
import p1 from "public/p1.png"
import p2 from "public/p2.png"
import p3 from "public/p3.png"
import p4 from "public/p4.png"
import p5 from "public/p5.png"
import p6 from "public/p6.png"
import unique from "public/unique.webp"
import p7 from "public/p7.png"
import p8 from "public/p8.png"
import p9 from "public/p9.png"
import p10 from "public/p10.png"

const page = () => {
  return (
    <div className = "grid grid-cols-4 gap-4 mt-16 mb-16">
        <GenderProducts img = {p1} title = "Brushed Raglan Sweatshirt" tag='Sweater' price={195}/>
        <GenderProducts img = {p2} title = "Cameryn Sash Tie Dress" tag='Dress' price={545}/>
        <GenderProducts img = {p3} title = "Flex Sweatshirt" tag='Sweater' price={175}/>
        <GenderProducts img = {p4} title = "Flex Sweatpants" tag='Pants ' price={175}/>
        <GenderProducts img = {p5} title = "Pink Fleece Sweatpants" tag='Pants' price={195}/>
        <GenderProducts img = {p6} title = "Lite Sweatpants" tag='Pants' price={150}/>   
        <GenderProducts img = {unique} title = "Imperial Alpaca Hoodie" tag='Jackets' price={525}/>   
        <GenderProducts img = {p7} title = "Muscle Tank" tag='T-Shirts' price={75}/>   
        <GenderProducts img = {p8} title = "Brushed Bomber" tag='Jackets' price={225}/>
        <GenderProducts img = {p9} title = "Flex Push Button Bomber" tag = "Jackets" price = {225}/>
        <GenderProducts img = {p10} title = "Raglan Sweatshirt" tag = "Sweater" price = {195}/>  
    </div>
  )
}

export default page