// import css
import "../styles/housesPage.css";
//import image
import Image from "next/image";
//import icons
import { AiFillHome, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiSolidCircle } from "react-icons/bi";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function HousesPage() {
  //data
  const houseCardData = [
    {
      image: "/image/houseCart/houseCart1.png",
      titleImg: "برای فروش",
      subtitleImg: "ویلا کردان",
      bedRooms: "6",
      bathRooms: "2",
      metrage: "250",
      location: "البرز،کردان،شهرک خور",
    },
    {
      image: "/image/houseCart/houseCart2.png",
      titleImg: "برای خرید",
      subtitleImg: "ویلا کردان",
      bedRooms: "8",
      bathRooms: "4",
      metrage: "700",
      location: "البرز،کردان،شهرک خور",
    },
    {
      image: "/image/houseCart/houseCart3.png",
      titleImg: "برای خرید",
      subtitleImg: "ویلا کردان",
      bedRooms: "6",
      bathRooms: "3",
      metrage: "530",
      location: "البرز،کردان،شهرک خور",
    },
    {
      image: "/image/houseCart/houseCart4.png",
      titleImg: "برای فروش",
      subtitleImg: "ویلا کردان",
      bedRooms: "3",
      bathRooms: "2",
      metrage: "400",
      location: "البرز،کردان،شهرک خور",
    },
  ];

  return (
    <div className="HousesPage_container col-12">
      <div className="HousesPage_navbar col-10">
        <div className="HousesPage_navbar_right_side col-3">
          <p>پربازدید ترین های املاک</p>
        </div>
        <div className="HousesPage_navbar_left_side col-9">
          <div className="HousesPage_navbar_left_side_text col-12">
            <p>آپارتمان</p>
            <p>ویلا</p>
            <p>تجاری</p>
            <p>باغ</p>
            <p>کلنگی</p>
            <p>زمین</p>
          </div>
          <div className="HousesPage_navbar_left_side_Line col-12">
          </div>
        </div>
      </div>
      <div className="HousesPage_cards col-10">
        <div className="houseCrad_container col-12">
          {houseCardData.map((item, index) => {
            return (
              <div className="houseCrad_container_item">
                <div className="houseCrad_up_side">
                  <Image
                    style={{ borderRadius: "8px" }}
                    src={item.image}
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
      </div>
    </div>
  );
}
