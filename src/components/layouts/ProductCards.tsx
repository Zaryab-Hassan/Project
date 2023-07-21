import Image, {StaticImageData} from "next/image"
import { title } from "process"

function ProductCards(props:{img:StaticImageData , title:string , price:number}) {
  return (
    <div className = "px-14">
        <Image className = "max-h-96" height={400} width = {300} src = {props.img} alt = "p1Image"/>
        <h1 className = "font-bold test-lg mt-3">{props.title}</h1>
        <p className = "font-bold test-lg mt-3">${props.price}</p>
    </div>
  )
}

export default ProductCards