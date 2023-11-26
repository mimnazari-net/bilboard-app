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
import Link from "next/link";

export default function AdvertisingSection() {
  //data
  const sells = useSelector(
    (state: RootState) => state.bilboardSlice.sellsArray
  );

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
        <div className="forush_kol_filter_item " style={{ width: "131px" }}>
          <DropDown
            title="قیمت"
            items={["گرانترین", "ارزانترین"]}
            state={sortPrice}
            setState={setSortPrice}
          />
        </div>
        <div className="forush_kol_filter_item  " style={{ width: "97px" }}>
          <DropDown
            title="متراژ"
            items={["کوچکترین", "بزرگترین"]}
            state={sortMetrage}
            setState={setSortMetrage}
          />
        </div>
        <div className="forush_kol_filter_item " style={{ width: "128px" }}>
          <DropDown
            title="اتاق"
            items={["1", "2", "3", "4", "5", "6"]}
            state={filterBed}
            setState={setFilterBed}
          />
        </div>
        <div className="forush_kol_filter_item " style={{ width: "170px" }}>
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
            <RiSearch2Line style={{ fontSize: "30px" }} />
          </div>
        </div>
      </div>
      <div className="forush_kol">
        {tmp.map((item, index) => {
          return (
            <Link href={`/pages/advertisments/${item.id}`} 
            className="forush_kol_link"
            key={index}>
              <div className="forush_box ">
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
            </Link>
          );
        })}
      </div>
      <div className="forush_pagination">
        <Pagination count={sells.length / 12} shape="rounded" />
      </div>
    </div>
  );
}
