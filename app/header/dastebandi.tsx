import "../styles/dastebandi.css"
import Image from "next/image"
export default function Dastebandi(){
    const homes =[{
        image:"/image/garden.png"
    ,text:"باغ"},
{image:"/image/maskuni.png",
text:"مجتمع مسکونی"},
{image:"/image/shop.png",
text:"مغازه"},
{image:"/image/tejari.png",
text:"ملک تجاری"},
{image:"/image/edari.png",
text:"ملک اداری"},
{image:"/iamge/vila.png",
text:"ویلایی"},
{image:"/image/kolangi.png",
text:"کلنگی"},
{image:"/image/apartman.png",
text:"آپارتمان"},
{image:"/image/zamin.png",
text:"زمین"}]
    return(
        <div className="dastebandi_container">
<div className="datebandi_img">
    {homes.map((item, index)=>{return(
        <div key={index} className="datebandi_map">
            <Image 
    alt="homes"
    width={32}
    height={32}
    src={item.image}></Image>
    <p>{item.text}</p>
        </div>
    )})}
     </div>
        </div>
    )
}