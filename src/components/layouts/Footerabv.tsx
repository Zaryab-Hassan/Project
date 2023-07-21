import Image from "next/image"
import logo from "/public/logo.webp"
import { Twitter } from "lucide-react"
import { Facebook } from "lucide-react"
import {Linkedin} from "lucide-react"
import { Button } from "../ui/button"

const Footerabv = () => {
  return (
    <div className = "flex flex-col lg:flex-row justify-evenly mt-32 text-zinc-600">
        <div className = "max-w-xs">
            <Image className = "" src = {logo} alt = "logo"/>
            <p className = "mt-7 mb-8">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made</p>
            <div className = "flex">
            <Button className = "bg-gray-200 hover:bg-gray-200 text-black w-12"><Twitter className = "" /></Button>
            <Button className = "bg-gray-200 hover:bg-gray-200 text-black w-12 ml-3 mr-3"><Facebook className = ""/></Button>
            <Button className = "bg-gray-200 hover:bg-gray-200 text-black w-12"><Linkedin className = ""/></Button>
            </div>
        </div>
        <div className = "flex flex-col text-zinc-600 mt-8 lg:mt-0 gap-3">
          <h1 className = "text-lg font-extrabold">Company</h1>
          <a href = "">About</a>
          <a href = "">Terms of Use</a>
          <a href = "">Privacy Policy</a>
          <a href = "">How it Works</a>
          <a href = "">Contact Us</a>
        </div>
        <div className = "flex flex-col text-zinc-600 mt-6 lg:mt-0 gap-3">
          <h1 className = "text-lg font-extrabold">Support</h1>
          <a href = "">Support Carrer</a>
          <a href = "">24h Service</a>
          <a href = "">Quick Chat</a>
        </div>
        <div className = "flex flex-col text-zinc-600 mt-6 lg:mt-0 gap-3">
          <h1 className = "text-lg font-extrabold">Contact</h1>
          <a href = "">Whatsapp</a>
          <a href = "">Support 24h</a>
        </div>
    </div>
  )
}

export default Footerabv