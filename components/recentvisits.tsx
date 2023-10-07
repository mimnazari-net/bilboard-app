import "../styles/recentvisit.css"
import UserPageHeader from "./userPageHeader"
import Image from "next/image"
export default function Recentvisits(){
    const recently=[{image:"/image/recentpic.png",
        text:"خانه 615 متری در قیطریه",
        price:"قیمت : 253,000,000,000  ",
        btn:"مشاهده ملک"

    },
    {image:"/image/recentpic.png",
    text:"خانه 615 متری در قیطریه",
    price:"قیمت : 253,000,000,000  ",
    btn:"مشاهده ملک"

},{image:"/image/recentpic.png",
text:"خانه 615 متری در قیطریه",
price:"قیمت : 253,000,000,000  ",
btn:"مشاهده ملک"

},{image:"/image/recentpic.png",
text:"خانه 615 متری در قیطریه",
price:"قیمت : 253,000,000,000  ",
btn:"مشاهده ملک"

},{image:"/image/recentpic.png",
text:"خانه 615 متری در قیطریه",
price:"قیمت : 253,000,000,000  ",
btn:"مشاهده ملک"

},{image:"/image/recentpic.png",
text:"خانه 615 متری در قیطریه",
price:"قیمت : 253,000,000,000  ",
btn:"مشاهده ملک"

}]
    return(
         <div className="recentvisit_container">
                  <UserPageHeader />
            {recently.map((item, index)=>{return(<div key={index} className="recentvisit_map"><Image
            alt=""
            width={60}
            height={60}
            src={item.image}></Image>
            <h1>{item.text}</h1>
            <p> {item.price}</p>
            <button>{item.btn} </button>

            </div>)})}
        </div>
       
    )
}