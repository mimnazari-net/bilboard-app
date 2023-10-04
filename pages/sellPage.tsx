// import css
import Image from "next/image";

// import css
import "<div styleName="" />
<styles />
<sellPage></sellPage>.css";

// import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";

// import Pagination
import Pagination from "@mui/material/Pagination";

export default function Sell() {
  //data
  const sells = [
    {
      image: "/image/forushx1.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forushx2.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forushx3.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forushx4.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush2.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush3.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush4.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush2.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush3.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush4.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush2.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush3.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush4.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush2.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush3.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
    {
      image: "/image/forush4.png",
      text: "آپارتمان 315 متری نیاوران",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "نیاوران",
    },
  ];
  return (
    <div className="forush_container">
      <div className="forush_kol">
        {sells.map((item, index) => {
          return (
            <div key={index} className="forush_box">
              <Image alt="" width={350} height={190} src={item.image}></Image>
              <div className="forush_texts">
                <p>{item.text}</p>
              </div>
              <div className="forush_loc">
                <HiOutlineLocationMarker size={"16px"} color={"#292D32"} />
                <p>{item.loc}</p>
              </div>
              <div className="forush_price_kol">
                <div className="forush_price">
                  <p>قیمت : </p>
                  {item.price}
                </div>
                <div className="forush_icons">
                  <div className="forush_rooms">
                    <IoBed size={"8px"} /> {item.bed}
                  </div>
                  <div className="forush_bath">
                    <FaBath size={"8px"} /> {item.bath}
                  </div>
                </div>
              </div>
              <div className="forush_price_down">
                <div className="forush_price">
                  <p>{item.eachm} </p>
                </div>
                <div className="forush_mahal">
                  <div className="forush_city">{item.city}</div>
                  <div className="forush_street">{item.street} </div>
                </div>
              </div>
            </div>
          );
        })}
        <Pagination count={10} shape="rounded" />
      </div>
    </div>
  );
}
