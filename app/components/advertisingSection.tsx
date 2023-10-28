"use client";

// import react
import { useState, useEffect, useRef } from "react";

// import image
import Image from "next/image";

// import icon
import { FaChevronDown } from "react-icons/fa";

// import css
import "../../styles/advertisingSection.css";

// import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaBath } from "react-icons/fa";
import { IoBed } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";

// import Pagination
import Pagination from "@mui/material/Pagination";

// import components
import DropDown from "./dropdown";

export default function AdvertisingSection() {
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
      metrage: "315",
    },
    {
      image: "/image/forushx2.png",
      text: "آپارتمان 400 متری فرمانیه",
      loc: "فرمانیه",
      price: " 47,250,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "فرمانیه",
      metrage: "400",
    },
    {
      image: "/image/forushx3.png",
      text: "آپارتمان 600 متری شهرک غرب",
      loc: "میدان کاج",
      price: " 47,250,000,000",
      bed: "6",
      bath: "4",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "کاج",
      metrage: "600",
    },
    {
      image: "/image/forushx4.png",
      text: "آپارتمان 250 متری جنت آباد",
      loc: "شمال کاخ نیاوران",
      price: " 47,250,000,000",
      bed: "3",
      bath: "2",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "جنت آباد شمالی",
      metrage: "250",
    },
    {
      image: "/image/forush.png",
      text: "آپارتمان 150 متری تهرانپارس",
      loc: "شمال کاخ نیاوران",
      price: " 4,000,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 15,000,000",
      city: "تهران",
      street: "نیاوران",
      metrage: "150",
    },
    {
      image: "/image/forush2.png",
      text: "ویلایی 700 متری شهرک غرب",
      loc: "شمال کاخ نیاوران",
      price: " 50,000,000,000",
      bed: "5",
      bath: "3",
      eachm: "قیمت هر متر : 150,000,000",
      city: "تهران",
      street: "خورودین",
      metrage: "700",
    },
    {
      image: "/image/forush3.png",
      text: "آپارتمان 100 متری میردادماد",
      loc: "میردادماد",
      price: " 47,250,000,000",
      bed: "2",
      bath: "1",
      eachm: "قیمت هر متر : 19,000,000",
      city: "تهران",
      street: "میردادماد",
      metrage: "100",
    },
    {
      image: "/image/forush4.png",
      text: "آپارتمان 260 متری ونک",
      loc: "ونک",
      price: "90,250,000,000",
      bed: "2",
      bath: "2",
      eachm: "قیمت هر متر : 20,000,000",
      city: "تهران",
      street: "ونک",
      metrage: "260",
    },
    {
      image: "/image/forush.png",
      text: "آپارتمان 240 متری صادقیه",
      loc: "صادقیه",
      price: "30,250,000,000",
      bed: "2",
      bath: "1",
      eachm: "قیمت هر متر : 130,000,000",
      city: "تهران",
      street: "صادقیه",
      metrage: "240",
    },
    {
      image: "/image/forush2.png",
      text: "آپارتمان 180 متری نارمک",
      loc: "نارمک",
      price: " 47,250,000,000",
      bed: "2",
      bath: "1",
      eachm: "قیمت هر متر : 15,000,000",
      city: "تهران",
      street: "نارمک",
      metrage: "180",
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
      metrage: "315",
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
      metrage: "315",
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
      metrage: "315",
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
      metrage: "315",
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
      metrage: "315",
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
      metrage: "315",
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
      metrage: "315",
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
      metrage: "315",
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
      metrage: "315",
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
      metrage: "315",
    },
  ];

  const [filteredSells, setFilteredSells] = useState(sells);
  const [searchItem, setSearchItem] = useState("");
  const [sortMetrage, setSortMetrage] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [filterBed, setFilterBed] = useState("");
  const [filterAge, setFilterAge] = useState("");

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangeSearch = (e: InputEvent) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = sells.filter((item) =>
      item.text.includes(searchItem)
    );
    setFilteredSells(filteredItems);
  };

  

  let arrayMap = searchItem === "" ? sells : filteredSells;
  return (
    <div className="forush_container col-12">
      <div className="forush_kol col-10">
        <div className="forush_kol_filter col-12">
          <div className="forush_kol_filter_item col-1 ">
            <DropDown
              title="قیمت"
              items={["گرانترین", "ارزانترین"]}
              state={sortPrice}
              setState={setSortPrice}
            />
          </div>
          <div className="forush_kol_filter_item col-1 ">
            <DropDown
              title="متراژ"
              items={["کوچکترین", "بزرگترین"]}
              state={sortMetrage}
              setState={setSortMetrage}
            />
          </div>
          <div className="forush_kol_filter_item col-1 ">
             <DropDown
              title="اتاق"
              items={["1", "2", "3", "4", "5", "6"]}
              state={filterBed}
              setState={setFilterBed}
            />
          </div>
          <div className="forush_kol_filter_item ">
          <DropDown
              title="سال ساخت"
              items={["نوساز","+3", "+6", "+9", "+12", "+15", "+20"]}
              state={filterAge}
              setState={setFilterAge }
            />
          </div>
          <div className="forush_kol_filter_item_search_content col-6">
            <input
              type="search"
              placeholder="جستجوی شهر، منطقه، محله و..."
              className="forush_kol_filter_item_search col-12"
              onChange={handleChangeSearch}
              value={searchItem}
            />
            <div className="forush_kol_filter_item_search_icon">
              <RiSearch2Line />
            </div>
          </div>
        </div>
        {arrayMap
          .map((item, index) => {
            return (
              <div key={index} className="forush_box col-25">
                <Image alt="" width={270} height={150} src={item.image}></Image>
                <div className="forush_texts_content col-11">
                  <div className="forush_texts">
                    <p>{item.text}</p>
                  </div>
                  <div className="forush_loc col-6">
                    <HiOutlineLocationMarker size={"16px"} color={"#292D32"} />
                    <p>{item.loc}</p>
                  </div>
                  <div className="forush_price_kol col-12">
                    <div className="forush_price">
                      <p>قیمت : </p>
                      {item.price}
                    </div>
                    <div className="forush_icons col-3">
                      <div className="forush_rooms">
                        <IoBed size={"9px"} /> {item.bed}
                      </div>
                      <div className="forush_bath">
                        <FaBath size={"9px"} /> {item.bath}
                      </div>
                    </div>
                  </div>
                  <div className="forush_price_down col-12">
                    <div className="forush_price col-8">
                      <p>{item.eachm} </p>
                    </div>
                    <div className="forush_mahal col-5">
                      <div className="forush_city">{item.city}</div>
                      <div className="forush_street">{item.street} </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="forush_pagination">
        <Pagination count={sells.length / 16} shape="rounded" />
      </div>
    </div>
  );
}
