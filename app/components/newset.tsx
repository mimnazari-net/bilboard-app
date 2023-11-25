"use client";
// import css
import { HiOutlineLocationMarker } from "react-icons/hi";
import "../../styles/newest.css";
// import image
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Newest() {

  const windowInnerWidth  = window.innerWidth;

  // data
  const images = [
    {
      image: "/image/newest/1.jpg",
      metrage: "190",
      location: "فرمانیه",
    },
    {
      image: "/image/newest/2.jpg",
      metrage: "300",
      location: "الهیه",
    },
    {
      image: "/image/newest/3.jpg",
      metrage: "450",
      location: "پاسداران",
    },
    {
      image: "/image/newest/4.jpg",
      metrage: "250",
      location: "ولنجک",
    },
    {
      image: "/image/newest/5.jpg",
      metrage: "500",
      location: "قیطریه",
    },
    {
      image: "/image/newest/6.jpg",
      metrage: "200",
      location: "قلهک",
    },
    {
      image: "/image/newest/7.jpg",
      metrage: "380",
      location: "تجریش",
    },
  ];
  return (
    <div className="newest_container ">
      <div className="newest_content ">
        <div className="newest_title ">
          <h1>تازه ترین آپارتمان های مسکونی</h1>
          
            <div className="newest_arow_btn ">
              <button className="newest-button-next">
                <AiOutlineArrowRight style={{ fontSize: "18px" }} />
              </button>
              <button className="newest-button-prev">
                <AiOutlineArrowLeft style={{ fontSize: "18px" }} />
              </button>
            </div>
          
        </div>

        <div className="newest_slider ">
          <Swiper
            slidesPerView={ windowInnerWidth >= 1440 ? 5 : 2}
            spaceBetween={10}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {images.map((item, index) => {
              return (
                <SwiperSlide>
                  <div className="newest_item">
                    <Image
                      className="newest_item_img"
                      width={226}
                      height={238}
                      alt=""
                      src={item.image}
                    />
                    <div className="newest_item_cover  ">
                      <div className="newest_item_text  ">
                        <HiOutlineLocationMarker
                          style={{
                            fontSize: "large",
                          }}
                        />
                        <div> { item.metrage } متری  </div>
                        <div>{item.location }  </div>
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
  );
}
