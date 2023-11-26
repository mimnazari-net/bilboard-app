"use client";
import React, { useRef, useState } from "react";

// import css
import "../../styles/consultants.css";

// import image
import Image from "next/image";

// import material
import VerifiedSharpIcon from "@mui/icons-material/VerifiedSharp";
import BookmarksOutlinedIcon from "@mui/icons-material/BookmarksOutlined";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Rating } from "@mui/material";

// import carousel Swiper
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Consultants() {
  const router = useRouter();

  // data
  const consultant = [
    {
      image: "/image/Frame 67.png",
      loc: "نیاوران",
      text: "مشاورین املاک ققنوس",
      star: "3",
    },
    {
      image: "/image/gheytariye.png",
      loc: "اندرزگو",
      text: " مشاورین املاک قیطریه ",
      star: "4",
    },
    {
      image: "/image/salamat.png",
      loc: "اقدسیه",
      text: "  مشاورین املاک سلامت ",
      star: "4",
    },
    {
      image: "/image/atiye.png",
      loc: "فرشته",
      text: "مشاورین املاک آتیه ",
      star: "3",
    },
    {
      image: "/image/imaz.png",
      loc: "فرمانیه",
      text: " مشاورین املاک ایماز ",
      star: "5",
    },
    {
      image: "/image/ghaf.png",
      loc: "کامرانیه",
      text: "مشاورین املاک قاف",
      star: "2",
    },
    {
      image: "/image/malakuti.png",
      loc: "صاحبقرانیه",
      text: "  مشاورین املاک ملکوتی ",
      star: "3",
    },
    {
      image: "/image/atiyee.png",
      loc: "یاسر",
      text: "مشاورین املاک آتیه ",
      star: "5",
    },
  ];

  const cities = [
    "تهران",
    "کیش",
    "مشهد",
    "اصفهان",
    "شیراز",
    "مازندران",
    "گیلان",
    "رشت",
    "اراک",
    "اهواز",
    "قم",
    "همدان",
    "قشم",
    "بوشهر",
    "بندرعباس",
    "تبریز",
    "اردبیل",
    "قزوین",
    "شاهرود",
    "بجنورد",
    "آمل",
    "بابل",
    "رامسر",
  ];

  return (
    <div className="consultant_container ">
      <div className="consultant_title ">
        <h1>مشاورین املاک منتخب در سطح کشور</h1>
        <div className=" consultant_arow_btn ">
          <button className="swiper-button-next">
            <AiOutlineArrowRight style={{ fontSize: "18px" }} />
          </button>
          <button className="swiper-button-prev">
            <AiOutlineArrowLeft style={{ fontSize: "18px" }} />
          </button>
        </div>
      </div>
      <div className="consultant_swiper ">
        <Swiper
          slidesPerView={15}
          spaceBetween={30}
          loop={true}
          navigation={false}
          modules={[Navigation]}
          className="mySwiper"
        >
          {cities.map((item, index) => {
            return (
              <div className="consultant_swiper_item " key={index}>
                <SwiperSlide>
                  <button
                    className={
                      index === 0
                        ? "consultant_swiper_first_item"
                        : "consultant_swiper_btn"
                    }
                  >
                    {item}
                  </button>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
      <div className="consultant_content ">
        {consultant.map((item, index) => {
          return (
            <div className="consultant_item " key={index}>
              <Image
                className="consultant_pic "
                alt="مشاورین املاک"
                width={278}
                height={183}
                src={item.image}
              ></Image>

              <div className="consultant_down ">
                <div className="consultant_down_title ">
                  <VerifiedSharpIcon color="primary" />
                  <p>{item.text}</p>
                  <BookmarksOutlinedIcon />
                </div>
                <div className="consultant_loc ">
                  <div className="consultant_loc_right ">
                    <HiOutlineLocationMarker
                      style={{
                        color: "#292D32",
                        fontSize: "large",
                      }}
                    />
                    <p>{item.loc}</p>
                  </div>
                  <div className="consultant_loc_left">
                    <Rating
                      style={{ direction: "ltr" }}
                      defaultValue={parseInt(item.star)}
                      size="small"
                      readOnly
                    />
                  </div>
                </div>
                <button className="consultant_btn ">نمایش پروفایل </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="consultant_show_more">
        <Link href={"/pages/consultant"}>
          مشاهده بیشتر...
        </Link>
      </div>
    </div>
  );
}
