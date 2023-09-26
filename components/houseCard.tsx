//import css
import "../styles/houseCard.css";
//import image
import Image from "next/image";
//import icons
import { AiFillHome, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiSolidCircle } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function HouseCrad() {
  return (
    <div className="houseCrad_container">
      <div className="houseCrad_up_side">
        <Image
          style={{ borderRadius: "8px" }}
          src={"/image/house1.png"}
          width={272}
          height={211}
          alt=""
        />
      </div>
      <div className="houseCrad_down_side">
        <div className="houseCrad_title col-11 ">
          <div className="houseCrad_title_text ">
            <BiSolidCircle className="houseCrad_title_text_i" />
            <p>برای فروش</p>
          </div>
          <div className="houseCrad_title_icons col-3">
            <AiOutlineHeart />
            <AiOutlineShareAlt />
          </div>
        </div>
        <p className="houseCrad_subtitle">ویلا کردان</p>
        <div className="houseCrad_options col-10">
          <div className="houseCrad_rooms">
            <IoBed />5 خوابه
          </div>
          <div className="houseCrad_bath">
            <FaBath />3 حمام
          </div>
          <div className="houseCrad_metr">
            <AiFillHome />
            340 متر
          </div>
        </div>
        <div className="houseCrad_location">
          <HiOutlineLocationMarker
            style={{ color:"#292D32" , fontSize: "large", marginLeft: "5px" }}
          />
          <p>البرز،کردان،شهرک خور</p>
        </div>
        <button className="col-10">تماس با مشاور</button>
      </div>
    </div>
  );
}
