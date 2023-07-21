import { StaticImageData } from "next/image";
import Image from "next/image"

function GenderProducts(props:{img:StaticImageData , title:string , tag:string , price:number}){
    return(
    <div>
    <Image className = "object-scale-down h-72 w-72" src = {props.img} alt = "p1Image"/>
        <h1 className = "font-bold test-lg mt-3">{props.title}</h1>
        <h2 className = "text-sm font-bold text-zinc-600">{props.tag}</h2>
        <p className = "font-bold test-lg mt-3">${props.price}</p>
    </div>
    )
}
export default GenderProducts