import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Newsletter = () => {
  return (
  <div className = "flex flex-col items-center text-center">
    <div className = "absolute">
        <h1 className = "font-sans font-bold text-4xl text-zinc-800">Subscribe Our Newsletter</h1>
        <p className = "mt-4 mb-4">Get the latest information and promo offers directly</p>
        <div className = "flex">
            <Input className = "mr-4" type="email" placeholder="Input Email Address" />
            <Button className = "bg-zinc-800 hover:bg-zinc-800 w-40">Get Started</Button>
        </div>
    </div>
    <div>
      <h1 className = "text-8xl font-extrabold text-gray-100 mt-2">Newsletter</h1>
    </div>
  </div>
  )
}
export default Newsletter