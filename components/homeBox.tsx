"use client";
import { useState } from "react";

//import css
import "../styles/homeBox.css";

import { FaChevronDown } from "react-icons/fa";

export default function HomeBox() {
  
  // data
  const [isActive, setIsActive] = useState<boolean>(false);
  const [type, setType] = useState<"خرید" | "رهن" | "اجاره">("خرید");
  const [city, setCity] = useState<string>("تهران");
  const [district, setDistrict] = useState<string>("الهیه");
  const [metrage, setMetrage] = useState<string>("100 meter");
  const [price, setPrice] = useState<string>("200 میلیون");
  const [deposit, setDeposit] = useState<string>("200 میلیون");
  const [rent, setRent] = useState<string>("5 میلیون");

  return (
    <div className="homeBox_container col-9">
      <div className="homeBox_up_side col-3">
        <div
          className="homeBox_buy col-4"
          style={{
            backgroundColor: (type === "خرید") ? "#023047" : "white",
            color:  (type === "خرید") ? "white" : "#023047",
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
            backgroundColor: (type === "رهن")  ? "#023047" : "white",
            color:(type === "رهن") ? "white" : "#023047",
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
            backgroundColor: (type === "اجاره") ? "#023047" : "white",
            color:(type === "اجاره") ? "white" : "#023047",
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
            isActive={isActive}
            setIsActive={setIsActive}
          />
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
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
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
  isActive,
  setIsActive,
}) => {
  return (
    <div className="homeBox_down_side_container col-12">
      <div>
        <DetailItem
          title="شهر"
          items={["تهران", "اصفهان", "شیراز"]}
          state={city}
          setState={setCity}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      <div>
        <DetailItem
          title="منطقه"
          items={["الهیه", "ولنجک", "شهران"]}
          state={district}
          setState={setDistrict}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
      <div>
        <DetailItem
          title="متراژ"
          items={["100 meter", "200 meter", "300 meter"]}
          state={metrage}
          setState={setMetrage}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>

      {type === "خرید" ? (
        <>
          <DetailItem
            title="قیمت"
            items={["100 میلیون", "200 میلیون", "300 میلیون"]}
            state={price}
            setState={setPrice}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </>
      ) : type === "رهن" ? (
        <>
          <DetailItem
            title="ودیعه"
            items={["100 میلیون", "200 میلیون", "300 میلیون"]}
            state={deposit}
            setState={setDeposit}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </>
      ) : (
        <>
          <DetailItem
            title="ودیعه"
            items={["100 میلیون", "200 میلیون", "300 میلیون"]}
            state={deposit}
            setState={setDeposit}
            isActive={isActive}
            setIsActive={setIsActive}
          />
          <DetailItem
            title="اجاره"
            items={["5 میلیون", "10 میلیون", "15 میلیون"]}
            state={rent}
            setState={setRent}
            isActive={isActive}
            setIsActive={setIsActive}
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
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ title, items, state, setState, isActive, setIsActive }) => {
  return (
    <div className="homeBox_detail_container">
      <div
        className="homeBox_detail_title"
        onClick={() => {
          setIsActive(true);
        }}
      >
        <p>{title}</p>
        <FaChevronDown className="homeBox_detail_icon" />
      </div>
      <div className="homeBox_dropdown_value">
        <p>{state}</p>
      </div>

      {isActive && (
        <div className="homeBox_dropdown_container">
          {items.map((item, index) => (
            <div
              className="homeBox_dropdown_items"
              onClick={() => {
                setState(item);
                setIsActive(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
