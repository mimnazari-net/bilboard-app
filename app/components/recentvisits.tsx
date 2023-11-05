import "../../styles/recentvisit.css";
import UserPageHeader from "./userPageHeader";
import Image from "next/image";
export default function Recentvisits() {
  const recently = [
    {
      image: "/image/recentpic.png",
      text: "خانه 615 متری در قیطریه",
      price: "قیمت : 253,000,000,000  ",
      btn: "مشاهده ملک",
    },{
      image: "/image/recentpic.png",
      text: "خانه 615 متری در قیطریه",
      price: "قیمت : 253,000,000,000  ",
      btn: "مشاهده ملک",
    },{
      image: "/image/recentpic.png",
      text: "خانه 615 متری در قیطریه",
      price: "قیمت : 253,000,000,000  ",
      btn: "مشاهده ملک",
    },
    {
      image: "/image/recentpic.png",
      text: "خانه 615 متری در قیطریه",
      price: "قیمت : 253,000,000,000  ",
      btn: "مشاهده ملک",
    },
    {
      image: "/image/recentpic.png",
      text: "خانه 615 متری در قیطریه",
      price: "قیمت : 253,000,000,000  ",
      btn: "مشاهده ملک",
    },
    {
      image: "/image/recentpic.png",
      text: "خانه 615 متری در قیطریه",
      price: "قیمت : 253,000,000,000  ",
      btn: "مشاهده ملک",
    },
    {
      image: "/image/recentpic.png",
      text: "خانه 615 متری در قیطریه",
      price: "قیمت : 253,000,000,000  ",
      btn: "مشاهده ملک",
    },
    {
      image: "/image/recentpic.png",
      text: "خانه 615 متری در قیطریه",
      price: "قیمت : 253,000,000,000  ",
      btn: "مشاهده ملک",
    },
    {
      image: "/image/recentpic.png",
      text: "خانه 615 متری در قیطریه",
      price: "قیمت : 253,000,000,000  ",
      btn: "مشاهده ملک",
    },
  ];
  return (
    <div className="recentvisit_container col-12">
      <div className="recentvisit_content col-10">
        <div className="col-12">
          <UserPageHeader />
        </div>
        <div className="recentvisit_map col-12">
          {recently.map((item, index) => {
            return (
              <div key={index} className="recentvisit_item col-11">
                <Image alt="" width={50} height={40} src={item.image}></Image>
                <h1>{item.text}</h1>
                <p> {item.price}</p>
                <button className="col-2">{item.btn} </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
