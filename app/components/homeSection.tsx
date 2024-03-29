"use client";
// import icon
import { FaChevronDown } from "react-icons/fa";

// import css
import "../../styles/homeSection.css";

//import components
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fillSearchItem, searchItemType } from "@/redux/bilboardSlice";
import { useRouter } from "next/navigation";
import Navbar from "./navbar";
import Image from "next/image";

export default function HomeSection() {
  // data
  const [type, setType] = useState<"خرید" | "رهن" | "اجاره">("خرید");
  const [city, setCity] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [metrage, setMetrage] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [deposit, setDeposit] = useState<string>("");
  const [rent, setRent] = useState<string>("");

  return (
    <div className="home_container">
      <Navbar />
      <div className="home_content">
        <div className="home_content_images">
          <div className="home_right_wall_patern"></div>
          <div className="home_container_left_side">
            <Image
              alt=""
              width={518}
              height={580}
              src={"/image/home-pic-left.png"}
            />
          </div>
        </div>
        <div className="home_content_text_container">
          <div className="home_content_text">
            <h1>خانه دلخواه خود را پیدا کنید!</h1>
            <p>در کمترین زمان و با کمک متخصصین مشاور مجموعه بیلبورد.</p>
          </div>
          <div className="home_container_box ">
            <div className="homeBox_container ">
              <div className="homeBox_up_side ">
                <div
                  className="homeBox_buy "
                  style={{
                    backgroundColor: type === "خرید" ? "#023047" : "white",
                    color: type === "خرید" ? "white" : "#023047",
                  }}
                  onClick={() => {
                    setType("خرید");
                  }}
                >
                  خرید
                </div>
                <div
                  className="homeBox_mortage"
                  style={{
                    backgroundColor: type === "رهن" ? "#023047" : "white",
                    color: type === "رهن" ? "white" : "#023047",
                  }}
                  onClick={() => {
                    setType("رهن");
                  }}
                >
                  رهن
                </div>
                <div
                  className="homeBox_rent "
                  style={{
                    backgroundColor: type === "اجاره" ? "#023047" : "white",
                    color: type === "اجاره" ? "white" : "#023047",
                  }}
                  onClick={() => {
                    setType("اجاره");
                  }}
                >
                  اجاره
                </div>
              </div>

              <div className="homeBox_down_side">
                <div className="homeBox_DetailsBox col-12">
                  <DetailsBox
                    type={type}
                    city={city}
                    setCity={setCity}
                    district={district}
                    setDistrict={setDistrict}
                    metrage={metrage}
                    setMetrage={setMetrage}
                    price={price}
                    setPrice={setPrice}
                    deposit={deposit}
                    setDeposit={setDeposit}
                    rent={rent}
                    setRent={setRent}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DetailsBox: React.FC<{
  type: "خرید" | "رهن" | "اجاره";
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  district: string;
  setDistrict: React.Dispatch<React.SetStateAction<string>>;
  metrage: string;
  setMetrage: React.Dispatch<React.SetStateAction<string>>;
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  deposit: string;
  setDeposit: React.Dispatch<React.SetStateAction<string>>;
  rent: string;
  setRent: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  type,
  city,
  setCity,
  district,
  setDistrict,
  metrage,
  setMetrage,
  price,
  setPrice,
  deposit,
  setDeposit,
  rent,
  setRent,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="homeBox_down_side_container col-12">
      <div className="homeBox_detailItem_item">
        <DetailItem
          title="شهر"
          items={[
            "تهران",
            "کیش",
            "اصفهان",
            "مشهد",
            "شیراز",
            "مازندران",
            "گیلان",
          ]}
          state={city}
          setState={setCity}
        />
        <hr className="homeBox_down_hr" />
      </div>

      <div className="homeBox_detailItem_item">
        <DetailItem
          title="منطقه"
          items={[
            "الهیه",
            "نارمک",
            "تهرانپارس",
            "صادقیه",
            "میرداماد",
            "ونک",
            "سعادت آباد",
          ]}
          state={district}
          setState={setDistrict}
        />
        <hr className="homeBox_down_hr" />
      </div>

      <div className="homeBox_detailItem_item">
        <DetailItem
          title="متراژ"
          items={[
            "50-40 متر",
            "70-50 متر",
            "100-70 متر",
            "150-100 متر",
            "200-150 متر",
            "300-200 متر",
            "+300 متر",
          ]}
          state={metrage}
          setState={setMetrage}
        />
        <hr className="homeBox_down_hr" />
      </div>

      {type === "خرید" ? (
        <>
          <DetailItem
            title="قیمت"
            items={[
              "تا 1,000,000,000  ",
              "تا 2,000,000,000  ",
              "تا 5,000,000,000  ",
              "تا 7,000,000,000  ",
              "تا 10,000,000,000  ",
              "تا 15,000,000,000  ",
              "تا 20,000,000,000  ",
              "تا 30,000,000,000  ",
            ]}
            state={price}
            setState={setPrice}
          />
        </>
      ) : type === "رهن" ? (
        <>
          <DetailItem
            title="ودیعه"
            items={[
              "100,000,000 تا ",
              "200,000,000 تا ",
              "300,000,000 تا",
              "400,000,000 تا",
              "500,000,000 تا",
              "600,000,000 تا",
            ]}
            state={deposit}
            setState={setDeposit}
          />
        </>
      ) : (
        <>
          <div className="homeBox_detailItem_item">
            <DetailItem
              title="ودیعه"
              items={[
                "100,000,000 تا ",
                "200,000,000 تا ",
                "300,000,000 تا",
                "400,000,000 تا",
                "500,000,000 تا",
                "600,000,000 تا",
              ]}
              state={deposit}
              setState={setDeposit}
            />

            <hr className="homeBox_down_hr" />
          </div>
          <DetailItem
            title="اجاره"
            items={[
              "5,000,000",
              "10,000,000",
              "15,000,000",
              "25,000,000",
              "35,000,000",
              "45,000,000",
              "55,000,000",
            ]}
            state={rent}
            setState={setRent}
          />
        </>
      )}
      <button
        onClick={() => {
          let searchItem: searchItemType = {
            type: type,
            city: city,
            district: district,
            metrage: metrage,
          };
          dispatch(fillSearchItem(searchItem));
          router.replace("/pages/advertisments");
        }}
        className="homeBox_btn"
      >
        جستجو
      </button>
    </div>
  );
};

const DetailItem: React.FC<{
  title: string;
  items: string[];
  state: string;
  setState: React.Dispatch<React.SetStateAction<string>>;
}> = ({ title, items, state, setState }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dropdownRef: React.LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (dropdownRef.current) {
        if (!dropdownRef.current.contains(event.target as Node)) {
          setIsActive(false);
        }
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("click", close);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("click", close);
      }
    };
  }, []);

  return (
    <div className="homeBox_detail_container">
      <div
        ref={dropdownRef}
        className="homeBox_detail_title"
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <p>{title}</p>
        <FaChevronDown
          style={{
            rotate: isActive ? "180deg" : "0deg",
            transition: "0.2s ease-in-out",
          }}
          className="homeBox_detail_icon"
        />
        {isActive && (
          <div className="homeBox_dropdown_container">
            {items.map((item, index) => (
              <div
                className="homeBox_dropdown_items"
                key={index}
                onClick={() => {
                  setState(item);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="homeBox_dropdown_value">
        <p>{state}</p>
      </div>
    </div>
  );
};
