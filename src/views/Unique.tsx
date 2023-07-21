import Image from "next/image"
import u1 from "/public/unique.webp"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Unique = () => {
  return (
    <section  className = "h-fit">
        <h1 className = "font-sans font-bold text-5xl text-zinc-800 mt-24 lg:ml-auto max-w-max lg:w-96 m-8">Unique And Authentic Vintage Designer Jewellery</h1>
        <div className = "flex flex-col  lg:flex-row mt-1 gap-28 absolute">
            <div className = "flex gap-28">    
                {/*Left Side*/}
                <div className = "max-w-max lg:w-40">
                    <h1 className = "font-bold">Using Good Quality Materials</h1>
                    <p className = "mt-4 mb-4">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    <h1 className = "font-bold">Modern Fashion Design</h1>
                    <p className = "mt-4 mb-4">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                <div  className = "max-w-max lg:w-40">
                    <h1 className = "font-bold">100% Handmade Products</h1>
                    <p className = "mt-4 mb-4">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    <h1 className = "font-bold">Discount for Bulk Orders</h1>
                    <p className = "mt-4 mb-4">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                </div>
                </div>
                {/*Right Side*/}
                <div className = "flex flex-col md:flex-row gap-x-20">
                    <div>
                        <Image className = "" width={240} height={300} src = {u1} alt = "uniqueImage"/>
                    </div>
                    <div>
                        <p className = "max-w-max md:w-72 mt-10 text-justify">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Link href = "/Products">
                            <Button className = "bg-zinc-800 hover:bg-zinc-800 mt-5">See All Products</Button>
                        </Link>
                    </div>
                </div>
        </div>
        <div>
            <h1 className = "text-8xl font-extrabold text-gray-100 w-80 mt-3">Different from others</h1>        
        </div>
    </section>
  )
}

export default Unique