"use client";
// import icon
import { FaChevronDown } from "react-icons/fa";

// import css
import "../styles/homePage.css";

//import components
import React, { useEffect, useRef, useState } from "react";

export default function HomePage() {
  // data
  const [type, setType] = useState<"خرید" | "رهن" | "اجاره">("خرید");
  const [city, setCity] = useState<string>("تهران");
  const [district, setDistrict] = useState<string>("الهیه");
  const [metrage, setMetrage] = useState<string>("100 meter");
  const [price, setPrice] = useState<string>("200 میلیون");
  const [deposit, setDeposit] = useState<string>("200 میلیون");
  const [rent, setRent] = useState<string>("5 میلیون");

  return (
    <div className="home_container col-12">
      <div className="home_container_right_side col-10">
        <div className="home_container_text">
          <h1>خانه دلخواه خود را پیدا کنید!</h1>
          <p>در کمترین زمان و با کمک متخصصین مشاور مجموعه بیلبورد.</p>
        </div>
        <div className="home_container_box">
          <div className="homeBox_container col-9">
            <div className="homeBox_up_side col-3">
              <div
                className="homeBox_buy col-4"
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
                className="homeBox_mortage col-4"
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
                className="homeBox_rent col-4"
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
  return (
    <div className="homeBox_down_side_container col-12">
      <div>
        <DetailItem
          title="شهر"
          items={["تهران", "اصفهان", "شیراز"]}
          state={city}
          setState={setCity}
        />
      </div>
      <div>
        <DetailItem
          title="منطقه"
          items={["الهیه", "ولنجک", "شهران"]}
          state={district}
          setState={setDistrict}
        />
      </div>
      <div>
        <DetailItem
          title="متراژ"
          items={["100 meter", "200 meter", "300 meter"]}
          state={metrage}
          setState={setMetrage}
        />
      </div>

      {type === "خرید" ? (
        <>
          <DetailItem
            title="قیمت"
            items={["100 میلیون", "200 میلیون", "300 میلیون"]}
            state={price}
            setState={setPrice}
          />
        </>
      ) : type === "رهن" ? (
        <>
          <DetailItem
            title="ودیعه"
            items={["100 میلیون", "200 میلیون", "300 میلیون"]}
            state={deposit}
            setState={setDeposit}
          />
        </>
      ) : (
        <>
          <DetailItem
            title="ودیعه"
            items={["100 میلیون", "200 میلیون", "300 میلیون"]}
            state={deposit}
            setState={setDeposit}
          />
          <DetailItem
            title="اجاره"
            items={["5 میلیون", "10 میلیون", "15 میلیون"]}
            state={rent}
            setState={setRent}
          />
        </>
      )}
      <button className="homeBox_btn"> جستجو </button>
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
    window.addEventListener("click", close);
    return () => {
      window.removeEventListener("click", close);
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
        <FaChevronDown style={{rotate : isActive ? "180deg" : "0deg",transition : "0.2s ease-in-out"}} className="homeBox_detail_icon"  />
        {isActive && (
          <div className="homeBox_dropdown_container">
            {items.map((item, index) => (
              <div
                className="homeBox_dropdown_items"
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
