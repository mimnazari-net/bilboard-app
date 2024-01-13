"use client";
// import css
import "../../../../styles/advertising.css";
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

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { sellsItemType } from "@/redux/bilboardSlice";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

export default function SingleAdvertising({
  params,
}: {
  params: { id: number };
}) {
  const sellsArray = useSelector(
    (state: RootState) => state.bilboardSlice.sellsArray
  );
  const data: sellsItemType | undefined = sellsArray.find(
    (item: sellsItemType) => item.id === +params.id
  );

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
      text: "لابی مجلل هشت متری با لابی من ",
    },
    {
      text: "لابی مجلل هشت متری با لابی من ",
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
      text: "لابی مجلل هشت متری با لابی من",
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

  console.log(data);
  // console.log(params)
  return (
    data && (
      <div className="SingleAdvertising_content">
        <Navbar />
        <div className="advertising_container">
          <div className="advertising_inside ">
            <div className="advertising_header">
              <div className="advertising_header_content">
                <p>{data.tag}</p>
                <MdArrowBackIos size={18} />
                <p>{data.city}</p>
                <MdArrowBackIos size={18} />
                <p>{data.type}</p>
                <MdArrowBackIos size={18} />
                <p>{data.loc}</p>
                <MdArrowBackIos size={18} />
              </div>
            </div>
            <div className="advertising_pics ">
              <div className="advertising_right_pic ">
                <Image
                  className="advertising_pic"
                  alt=""
                  width={590}
                  height={718}
                  src={"/image/right_pic.png"}
                ></Image>
              </div>
              <div className="advertising_left_pic">
                <Image
                  className="advertising_pic"
                  alt=""
                  width={570}
                  height={350}
                  src={data.image}
                ></Image>
                <Image
                  className="advertising_pic"
                  alt=""
                  width={570}
                  height={350}
                  src={data.image}
                ></Image>
              </div>
            </div>
            <div className="advertising_mid ">
              <div className="advertising_info ">
                <div className="advertising_spn ">
                  <span className="advertising_sp1 ">
                    خانه {data.metrage} متری در {data.street}
                    <p>دقایقی پیش در {data.loc}</p>
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
                <div className="advertising_details ">
                  <h2>{data.eachm * data.metrage} تومان</h2>
                  <div className="advertising_home_info">
                    <div>
                      <h2>{data.bed}</h2>
                      <p>اتاق خواب</p>
                    </div>
                    <hr />
                    <div>
                      <h2> {data.bath} </h2>
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
                      <h2>{data.eachm}</h2>
                      <p>قیمت هر متر</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="adevrtising_map">
                <iframe
                  className="adevrtising_google_map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1926.5343485742358!2d51.40660780142441!3d35.70083862676196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1701067571364!5m2!1sen!2s"
                  loading="lazy"
                ></iframe>
                <button>شماره تماس</button>
              </div>
            </div>
            <h1 className="advertising_h ">امکانات و ویژگی ها</h1>
            <div className="advertising_property ">
              {property.map((item , index) => {
                return <p key={index}>{item.text}</p>;
              })}
            </div>
            <hr className="advertising_property_hr" />
            <div className="advertising_carosel ">
              <div className="advertising_carosel_title ">
                <h1>آگهی های مشابه</h1>
              </div>
              <div className="advertising_carosel_swiper ">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={10}
                  dir="rtl"
                  navigation={false}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="Advertising_swiperSlider"
                >
                  {sellItems.map((item, index) => {
                    return (
                      <SwiperSlide>
                        <div className="Advertising_carosel_item" key={index}>
                          <Image
                            alt=""
                            width={300}
                            height={150}
                            src={item.image}
                          />
                          <div className="advertising_down_item ">
                            <h4>{item.text}</h4>
                            <div className="advertising_down_item_loc">
                              <HiOutlineLocationMarker />
                              <p>{item.loc}</p>
                            </div>
                            <div>
                              <p>{item.price}</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}
