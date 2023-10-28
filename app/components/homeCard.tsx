//import css
import "../../styles/homeCard.css";
//import image
import Image from "next/image";
//import icons
import { AiFillHome, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiSolidCircle } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function HomeCrad() {
  //data
  const houseCardData = [
    {
      Image: "/image/house1.png",
      titleImg: "برای فروش",
      subtitleImg: "ویلا کردان",
      bedRooms: "5",
      bathRooms: "3",
      metrage: "350",
      location: "البرز،کردان،شهرک خور",
    },
    {
      Image: "/image/house1.png",
      titleImg: "برای فروش",
      subtitleImg: "ویلا کردان",
      bedRooms: "5",
      bathRooms: "3",
      metrage: "350",
      location: "البرز،کردان،شهرک خور",
    },
    {
      Image: "/image/house1.png",
      titleImg: "برای فروش",
      subtitleImg: "ویلا کردان",
      bedRooms: "5",
      bathRooms: "3",
      metrage: "350",
      location: "البرز،کردان،شهرک خور",
    },
    {
      Image: "/image/house1.png",
      titleImg: "برای فروش",
      subtitleImg: "ویلا کردان",
      bedRooms: "5",
      bathRooms: "3",
      metrage: "350",
      location: "البرز،کردان،شهرک خور",
    },
  ];

  return (
    <div className="houseCrad_container col-12">
      {houseCardData.map((item, index) => {
        return (
          <div className="houseCrad_container_item">
            <div className="houseCrad_up_side">
              <Image
                style={{ borderRadius: "8px" }}
                src={item.Image}
                width={272}
                height={211}
                alt=""
              />
            </div>
            <div className="houseCrad_down_side">
              <div className="houseCrad_title col-11 ">
                <div className="houseCrad_title_text ">
                  <BiSolidCircle className="houseCrad_title_text_i" />
                  <p>{item.titleImg}</p>
                </div>
                <div className="houseCrad_title_icons col-3">
                  <AiOutlineHeart />
                  <AiOutlineShareAlt />
                </div>
              </div>
              <p className="houseCrad_subtitle"> {item.subtitleImg} </p>
              <div className="houseCrad_options col-10">
                <div className="houseCrad_rooms">
                  <IoBed />
                  {item.bedRooms} خوابه
                </div>
                <div className="houseCrad_bath">
                  <FaBath />
                  {item.bathRooms} حمام
                </div>
                <div className="houseCrad_metr">
                  <AiFillHome />
                  {item.metrage} متر
                </div>
              </div>
              <div className="houseCrad_location">
                <HiOutlineLocationMarker
                  style={{
                    color: "#292D32",
                    fontSize: "large",
                    marginLeft: "5px",
                  }}
                />
                <p> {item.location} </p>
              </div>
              <button className="col-10">تماس با مشاور</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
