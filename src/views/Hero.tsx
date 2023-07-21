import {Badge} from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import picture from "/public/picture.webp"
import b1 from "/public/Featured1.webp"
import b2 from "/public/Featured2.webp"
import b3 from "/public/Featured3.webp"
import b4 from "/public/Featured4.webp"

const Hero = () => {
    return(
        <div className = "text-black flex gap-36 mt-8">
            {/*Left Side*/}
            <div className = "sm:text-left ">
                <Badge className = "text-lg font-bold px-3 py-3 rounded-md bg-blue-200 hover:bg-blue-200 text-blue-700 mt-8"> 
                    Sale 70%
                </Badge>
                <h1 className="scroll-m-20 text-5xl w-72 gap-2 font-bold tracking-tight lg:text-5xl mt-5 text-zinc-800">
                    An Industrial Take on <br/> Streetwear
                </h1>
                <p className="text-zinc-600 mt-4">
                    Anyone can beat you but no one can beat your <br/> outfit as long as you wear Dine outfits.
                </p>
                <div>
                    <Link href = "/Products">
                    <Button className = "bg-zinc-800 text-white mt-4 hover:bg-zinc-800">
                        <ShoppingCart className = "mr-2"/>
                        Start Shopping
                    </Button>
                    </Link>
                </div>
                <div className = "grid grid-cols-2 mt-6 gap-y-4 md:flex justify-between md:mt-24">
                    <Image src = {b1} alt = "BAZAAR"/>
                    <Image src = {b2} alt = "BUSTLE"/>
                    <Image src = {b3} alt = "VERSACE"/>
                    <Image src = {b4} alt = "INSTYLE"/>
                </div>
            </div>
            {/*Right Side*/}
            <div className = "hidden lg:contents">
                <Image className = "rounded-full bg-pink-100 overflow-hidden object-fill" src = {picture} alt = "picture"/>
            </div>
        </div>
    )
}
export default Hero 