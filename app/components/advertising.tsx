"use client";
// import css
import "../../styles/advertising.css";
// import icon
import { MdArrowBackIos } from "react-icons/md";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineLocationMarker,
} from "react-icons/hi";

// import image
import Image from "next/image";

// import swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { useSwiper } from "swiper/react";

import { useState } from "react";

export default function Advertising() {
  const swiper = useSwiper();
  // data
  const property = [
    {
      text: "پلان بدون پرتی",
    },
    {
      text: "فرعی دنج و دیپلمات نشین",
    },
    {
      text: "لابی مجلل هشت متری با لابی من سه شیفت",
    },
    {
      text: "لابی مجلل هشت متری با لابی من سه شیفت",
    },
    {
      text: "پلان مهندسی با جانمایی جادویی",
    },
    {
      text: "استراکچر 52 st",
    },
    {
      text: "سقف عرشه فولادی",
    },
    {
      text: "سقف عرشه فولادی",
    },
    {
      text: "متریال ایتالیایی",
    },
    {
      text: "فرعی دنج و دیپلمات نشین",
    },
    {
      text: "لابی مجلل هشت متری با لابی من سه شیفت",
    },
    {
      text: "فرعی دنج و دیپلمات نشین",
    },
    {
      text: "پلان مهندسی با جانمایی جادویی",
    },
    {
      text: "استراکچر 52 st",
    },
    {
      text: "سقف عرشه فولادی",
    },
    {
      text: "استراکچر 52 st",
    },
  ];
  const sellItems = [
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
  ];
 
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="advertising_container col-12">
      <div className="advertising_inside col-10">
        <div className="advertising_header col-12">
          <div className="advertising_header_content col-3">
            <p>فروش</p>
            <MdArrowBackIos size={18} />
            <p>تهران</p>
            <MdArrowBackIos size={18} />
            <p>آپارتمان</p>
            <MdArrowBackIos size={18} />
            <p>قیطریه</p>
            <MdArrowBackIos size={18} />
          </div>
        </div>
        <div className="advertising_pics col-12">
          <div className="advertising_right_pic col-6">
            <Image
              className="advertising_pic"
              alt=""
              width={560}
              height={700}
              src={"/image/right_pic.png"}
            ></Image>
          </div>
          <div className="advertising_left_pic col-6">
            <Image
              className="advertising_pic"
              alt=""
              width={560}
              height={340}
              src={"/image/left-top-pic.png"}
            ></Image>
            <Image
              className="advertising_pic"
              alt=""
              width={560}
              height={340}
              src={"/image/left-down-pic.png"}
            ></Image>
          </div>
        </div>
        <div className="advertising_mid col-12">
          <div className="advertising_info col-9">
            <div className="advertising_spn col-12">
              <span className="advertising_sp1 ">
                خانه 615 متری در قیطریه
                <p>دقایقی پیش در قیطریه</p>
              </span>
              <span className="advertising_sp2 ">
                آژانس املاک : نماد زعفرانیه
                <p>تعداد مشاوران : 39</p>
              </span>
              <span className="advertising_sp2 ">
                سال ساخت : 1402
                <p>بیش از 9 ماه فعالیت</p>
              </span>
            </div>
            <div className="advertising_details col-12">
              <h2 className="col-4">253,000,000,000 تومان</h2>
              <div className="advertising_home_info col-8">
                <div>
                  <h2>4</h2>
                  <p>اتاق خواب</p>
                </div>
                <hr />
                <div>
                  <h2>5</h2>
                  <p>سرویس و حمام</p>
                </div>
                <hr />
                <div>
                  <h2>12</h2>
                  <p>طبقه</p>
                </div>
                <hr />
                <div>
                  <h2>4</h2>
                  <p>پارکینگ</p>
                </div>
                <hr />
                <div>
                  <h2>1</h2>
                  <p>انباری</p>
                </div>
                <hr />
                <div>
                  <h2>411,382,000</h2>
                  <p>قیمت هر متر</p>
                </div>
              </div>
            </div>
          </div>
          <div className="adevrtising_map col-2  ">
            <div className="col-12">
              <Image alt="" width={150} height={150} src={""}></Image>
              <button className="col-12">شماره تماس</button>
            </div>
          </div>
        </div>
        <h1 className="advertising_h col-12">امکانات و ویژگی ها</h1>
        <div className="advertising_property col-12">
          {property.map((item) => {
            return <p className="col-3">{item.text}</p>;
          })}
        </div>
        <hr className="col-12" />
        <div className="advertising_carosel col-12">
          <div className="advertising_carosel_title col-12">
            <h1>آگهی های مشابه</h1>
          </div>
          <div className="advertising_carosel_swiper col-12">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              dir="rtl"
              // navigation={true}
              // autoplay={{
              //   delay: 2500,
              //   disableOnInteraction: false,
              // }}
              // modules={[ Navigation]}
              className="mySwiper"
            >
              {
                sellItems.map((item, index)=>{
                  return(<SwiperSlide>
                <div className="Advertising_carosel_item col-12">
                  <Image
                    alt=""
                    width={262}
                    height={150}
                    src={item.image}
                  />
                  <div className="advertising_down_item col-10">
                    <h4>{item.text}</h4>
                    <div className="advertising_down_item_loc col-7">
                      <HiOutlineLocationMarker />
                      <p>{item.loc}</p>
                    </div>
                    <div>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>);
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
