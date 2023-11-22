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
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function AdvertisingSection() {
  //data
  const sells = [
    {
      image: "/image/forushx1.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 447250000000,
      bed: "5",
      bath: "3",
      eachm: 15000000,
      city: "مازندران",
      street: "نیاوران",
      metrage: 315,
      age: 5,
      tag: "خرید",
    },
    {
      image: "/image/forushx2.png",
      type: "آپارتمان",
      loc: "فرمانیه",
      price: 447250000000,
      bed: "5",
      bath: "3",
      eachm: 100000000,
      city: "تهران",
      street: "فرمانیه",
      metrage: 800,
      tag: "خرید",
      age: 5,
    },
    {
      image: "/image/forushx3.png",
      type: "آپارتمان",
      loc: "شهرک غرب",
      price: 247250000000,
      bed: "6",
      bath: "4",
      eachm: 12000000,
      city: "تهران",
      street: "کاج",
      metrage: 600,
      tag: "خرید",
      age: 5,
    },
    {
      image: "/image/forushx4.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 127250000000,
      bed: "3",
      bath: "2",
      eachm: 130000000,
      city: "اصفهان",
      street: "جنت آباد شمالی",
      metrage: 360,
      tag: "خرید",
      age: 4,
    },
    {
      image: "/image/forush.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 4000000000,
      bed: "1",
      bath: "3",
      eachm: 21000000,
      city: "تهران",
      street: "نیاوران",
      metrage: 620,
      tag: "رهن",
      age: 2,
    },
    {
      image: "/image/forush2.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 50000000000,
      bed: "5",
      bath: "3",
      eachm: 50000000,
      city: "گیلان",
      street: "خورودین",
      metrage: 700,
      tag: "رهن",
      age: 10,
    },
    {
      image: "/image/forush3.png",
      type: "آپارتمان",
      loc: "میردادماد",
      price: 47250000000,
      bed: "1",
      bath: "1",
      eachm: 19000000,
      city: "مشهد",
      street: "میردادماد",
      metrage: 100,
      tag: "رهن",
      age: 15,
    },
    {
      image: "/image/forush4.png",
      type: "آپارتمان",
      loc: "ونک",
      price: 90250000000,
      bed: "2",
      bath: "2",
      eachm: 30000000,
      city: "گیلان",
      street: "ونک",
      metrage: 260,
      tag: "رهن",
      age: 9,
    },
    {
      image: "/image/forush.png",
      type: "آپارتمان",
      loc: "صادقیه",
      price: 30250000000,
      bed: "2",
      bath: "1",
      eachm: 17000000,
      city: "شیراز",
      street: "صادقیه",
      metrage: 530,
      tag: "رهن",
      age: 0,
    },
    {
      image: "/image/forush2.png",
      type: "آپارتمان",
      loc: "نارمک",
      price: 97250000000,
      bed: "2",
      bath: "1",
      eachm: 16000000,
      city: "اصفهان",
      street: "نارمک",
      metrage: 180,
      tag: "رهن",
      age: 0,
    },
    {
      image: "/image/forush3.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 87250000000,
      bed: "3",
      bath: "3",
      eachm: 53000000,
      city: "اصفهان",
      street: "نیاوران",
      metrage: 560,
      tag: "اجاره",
      age: 14,
    },
    {
      image: "/image/forush4.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 257250000000,
      bed: "3",
      bath: "3",
      eachm: 18000000,
      city: "مازندران",
      street: "نیاوران",
      metrage: 430,
      tag: "اجاره",
      age: 7,
    },
    {
      image: "/image/forush.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 100250000000,
      bed: "4",
      bath: "3",
      eachm: 41000000,
      city: "گیلان",
      street: "نیاوران",
      metrage: 230,
      tag: "اجاره",
      age: 16,
    },
    {
      image: "/image/forush2.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 467250000000,
      bed: "4",
      bath: "3",
      eachm: 250000000,
      city: "کیش",
      street: "نیاوران",
      metrage: 360,
      tag: "اجاره",
      age: 25,
    },
    {
      image: "/image/forush3.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 537250000000,
      bed: "5",
      bath: "3",
      eachm: 35000000,
      city: "شیراز",
      street: "نیاوران",
      metrage: 300,
      tag: "اجاره",
      age: 0,
    },
    {
      image: "/image/forush4.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 427250000000,
      bed: "3",
      bath: "3",
      eachm: 190000000,
      city: "مشهد",
      street: "نیاوران",
      metrage: 170,
      tag: "اجاره",
      age: 1,
    },
    {
      image: "/image/forush.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 477250000000,
      bed: "3",
      bath: "3",
      eachm: 25000000,
      city: "کیش",
      street: "نیاوران",
      metrage: 65,
      tag: "خرید",
      age: 8,
    },
    {
      image: "/image/forush2.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 479250000000,
      bed: "5",
      bath: "3",
      eachm: 34000000,
      city: "کیش",
      street: "نیاوران",
      metrage: 450,
      tag: "خرید",
      age: 12,
    },
    {
      image: "/image/forush3.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 476250000000,
      bed: "4",
      bath: "3",
      eachm: 360000000,
      city: "تهران",
      street: "نیاوران",
      metrage: 250,
      tag: "رهن",
      age: 19,
    },
    {
      image: "/image/forush4.png",
      type: "آپارتمان",
      loc: "نیاوران",
      price: 457250000000,
      bed: "5",
      bath: "3",
      eachm: 290000000,
      city: "تهران",
      street: "نیاوران",
      metrage: 200,
      tag: "رهن",
      age: 30,
    },
  ];

  const searchDetails = useSelector(
    (state: RootState) => state.bilboardSlice.searchItem
  );

  const [searchItem, setSearchItem] = useState("");
  const [sortMetrage, setSortMetrage] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [filterBed, setFilterBed] = useState("");
  const [filterAge, setFilterAge] = useState("");

  const [tmp, setTmp] = useState(sells);

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangeSearch = (e: InputEvent) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  useEffect(() => {
    let a = [...tmp];

    // search
    if (searchItem !== "") {
      const filteredItems = sells.filter((item) =>
        item.loc.includes(searchItem)
      );
      setTmp(filteredItems);
    } else setTmp(sells);

    // sort by price
    if (sortPrice === "ارزانترین") {
      a.sort((a, b) => (a.price > b.price ? 1 : -1));
      setTmp(a);
    } else if (sortPrice === "گرانترین") {
      a.sort((a, b) => (a.price > b.price ? -1 : 1));
      setTmp(a);
    }

    // sort by metrage
    if (sortMetrage === "کوچکترین") {
      a.sort((a, b) => (a.metrage > b.metrage ? 1 : -1));
      setTmp(a);
    } else if (sortMetrage === "بزرگترین") {
      a.sort((a, b) => (a.metrage > b.metrage ? -1 : 1));
      setTmp(a);
    }
    // filter bedRoom
    if (filterBed !== "") {
      a = [...sells];
      let c = a.filter((items) => items.bed === filterBed);
      setTmp(c);
    }

    // filter age
    switch (filterAge) {
      case "نوساز": {
        a = [...sells];
        let c = a.filter((items) => items.age <= 3);
        setTmp(c);
        break;
      }

      case "نوساز": {
        a = [...sells];
        let c = a.filter((items) => items.age > 3 && items.age <= 6);
        setTmp(c);
        break;
      }

      case "+3": {
        a = [...sells];
        let c = a.filter((items) => items.age > 6 && items.age <= 9);
        setTmp(c);
        break;
      }

      case "+9": {
        a = [...sells];
        let c = a.filter((items) => items.age > 9 && items.age <= 12);
        setTmp(c);
        break;
      }

      case "+12": {
        a = [...sells];
        let c = a.filter((items) => items.age > 12 && items.age <= 15);
        setTmp(c);
        break;
      }

      case "15": {
        a = [...sells];
        let c = a.filter((items) => items.age > 15 && items.age <= 20);
        setTmp(c);
        break;
      }

      case "+20": {
        a = [...sells];
        let c = a.filter((items) => items.age > 20);
        setTmp(c);
        break;
      }

      default:
        break;
    }
    if (searchDetails.city !== "") {
      const searchedAdds = a.filter((item) => item.city === searchDetails.city);
      setTmp(searchedAdds);
      console.log(searchedAdds);
    }
  }, [sortMetrage, searchItem, sortPrice, filterBed, filterAge, searchDetails]);

  return (
    <div className="forush_container ">
      <div className="forush_kol_filter">
        <div className="forush_kol_filter_item "
        style={{width:"131px"}}
        >
          
          <DropDown
            title="قیمت"
            items={["گرانترین", "ارزانترین"]}
            state={sortPrice}
            setState={setSortPrice}
          />
        </div>
        <div className="forush_kol_filter_item  "
        style={{width:"97px"}}
        >
          <DropDown
            title="متراژ"
            items={["کوچکترین", "بزرگترین"]}
            state={sortMetrage}
            setState={setSortMetrage}
          />
        </div>
        <div className="forush_kol_filter_item "
        style={{width:"128px"}}
        >
          <DropDown
            title="اتاق"
            items={["1", "2", "3", "4", "5", "6"]}
            state={filterBed}
            setState={setFilterBed}
          />
        </div>
        <div className="forush_kol_filter_item "
        style={{width:"170px"}}
        >
          <DropDown
            title="سال ساخت"
            items={["نوساز", "+3", "+6", "+9", "+12", "+15", "+20"]}
            state={filterAge}
            setState={setFilterAge}
          />
        </div>
        <div className="forush_kol_filter_item_search_content ">
          <input
            type="search"
            placeholder="جستجوی شهر، منطقه، محله و..."
            className="forush_kol_filter_item_search "
            onChange={handleChangeSearch}
            value={searchItem}
          />
          <div className="forush_kol_filter_item_search_icon">
            <RiSearch2Line style={{fontSize:"30px"}} />
          </div>
        </div>
      </div>
      <div className="forush_kol">
        {tmp.map((item, index) => {
          return (
            <div key={index} className="forush_box ">
              <Image alt="" width={284} height={155} src={item.image}></Image>
              <div className="forush_texts_content ">
                <div className="forush_texts">
                  <p>{item.type}</p>
                  <p> {item.metrage}متری </p>
                  <p>{item.loc} </p>
                </div>
                <div className="forush_loc ">
                  <HiOutlineLocationMarker
                    style={{ marginLeft: "5px" }}
                    size={"16px"}
                    color={"#292D32"}
                  />
                  <p>{item.street}</p>
                </div>
                <div className="forush_price_kol ">
                  <div className="forush_price">
                    <p>قیمت : </p>
                    {item.eachm * item.metrage}
                  </div>
                  <div className="forush_icons ">
                    <div className="forush_rooms">
                      <IoBed size={"9px"} /> {item.bed}
                    </div>
                    <div className="forush_bath">
                      <FaBath size={"9px"} /> {item.bath}
                    </div>
                  </div>
                </div>
                <div className="forush_price_down ">
                  <div className="forush_price_each ">
                    <p> {item.eachm} </p>
                    <p> قیمت هر متر: </p>
                  </div>
                  <div className="forush_mahal ">
                    <div className="forush_city">{item.city}</div>
                    <div className="forush_street">{item.loc} </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="forush_pagination">
        <Pagination count={sells.length / 12} shape="rounded" />
      </div>
    </div>
  );
}
