import {Badge} from "@/components/ui/badge"
import Image from "next/image"
import event1 from "public/event1.webp"
import event2 from "public/event2.webp"
import event3 from "public/event3.webp"
import {Button} from "@/components/ui/button"
const Promotions = () => {
  return (
    <div className = "mt-20 overflow-hidden h-fit">
        <div className = "flex flex-col text-justify items-center">
            <Badge className = "text-blue-700 font-extrabold text-base bg-white hover:bg-white">PROMOTIONS</Badge>
            <p className = "font-sans font-bold text-4xl text-center text-zinc-800">Our Promotions Events</p>

        </div>
        <section className = "flex flex-col lg:flex-row gap-5 p-10 mt-10">
            {/*Left Side*/}
            <div className = "flex flex-col items-center gap-4">
                <div className = "sm:flex bg-gray-300 sm:h-52 md:min-w-full">
                    <div>
                        <h1 className = "text-3xl font-extrabold sm:mt-14 ml-4">GET UP TO <span>60%</span></h1>
                        <p className = "text-lg font-mono ml-5">For the summer season</p>
                    </div>
                    <Image className = "overflow-hidden sm:ml-20" src = {event1} alt = "event1Image"/>
                </div>
                <div className = "text-white bg-zinc-900 text-center h-52 min-w-full">
                    <div className = "mt-5 lg:mt-5">
                        <h1 className = "text-3xl font-extrabold">GET <span>30%</span> Off</h1>
                        <p className = "mt-5 text-xs">USE PROMO CODE</p>
                    </div>
                    <Button className = "bg-zinc-600 hover:bg-zinc-600 w-64 text-justify  text-base mt-2">DINEWEEKEND SALE</Button>
                </div>
            </div>
            {/*Rigt Side*/}
            <div className = "sm:flex justify-center gap-5 h-fit">
                <div className = "bg-orange-100 w-screen md:max-w-max">
                    <p className = "font-bold text-lg ml-3 mt-1">Flex Sweatshirt</p>
                    <span className = ""></span>
                    <div className = "flex flex-col items-center">
                        <Image className = "mt-4" height = {250} width = {300} src = {event2} alt = "event2Image"/>
                    </div>
                </div>
                <div className = "bg-gray-300 w-screen md:max-w-max">
                    <p className = "font-bold text-lg ml-3 mt-1">Flex Push Button Bomber</p>
                    <span className = ""></span>
                    <div className = "flex flex-col items-center">
                        <Image className = "mt-3" height = {250} width = {300} src = {event3} alt = "event3Image"/>
                    </div>
                </div>
            </div> 
        </section>
    </div>
  )}

export default Promotions