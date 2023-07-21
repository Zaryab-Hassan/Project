import Link from "next/link"
import logo from "/public/logo.webp"
import Image from "next/image"
import {ShoppingCart} from "lucide-react"
const Header =  () => {
    return(
        <div className = "md:flex justify-evenly items-center bg-white text-black mt-6">
            <div className = "flex justify-around">
                <Link href = "/"><Image src = {logo} alt = "logo"/></Link>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="md:hidden cursor-pointer"><line x1="21" x2="3" y1="6" y2="6"/><line x1="21" x2="9" y1="12" y2="12"/><line x1="21" x2="7" y1="18" y2="18"/></svg>
                </div>
            </div>
            <ul className = "hidden md:contents gap-x-10 ">
                <li className = "text-lg">
                    <Link href = "/Female">
                        Female
                    </Link>
                    </li>
                <li className = "text-lg">
                <Link href = "/Male">
                        Male
                    </Link>
                </li>
                <li className = "text-lg">
                <Link href = "/Kids">
                        Kids
                    </Link>
                </li>
                <li className = "text-lg">
                <Link href = "/Products">
                        All Products
                    </Link>
                </li>
            <div className = "h-10 w-10 rounded-full bg-blue-200">
                <ShoppingCart className = "mt-2 ml-1.5"></ShoppingCart>
            </div>
            </ul>
        </div>
    )
}
export default Header