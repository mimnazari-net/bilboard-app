"use client";
import { useState } from "react";

//import css
import "../../styles/homeBox.css";

import HomeDropBox from "./homeDropBox";

export default function HomeBox() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  const [type, setType] = useState<"خرید" | "رهن" | "اجاره">("خرید");
  const [city, setCity] = useState<string>("");

  console.log("aaa", city);

  return (
    <div className="homeBox_container col-9">
      <div className="homeBox_up_side col-3">
        <div className="homeBox_buy col-4" onClick={() => setType("خرید")}>
          خرید
        </div>
        <div className="homeBox_mortage col-4" onClick={() => setType("رهن")}>
          رهن
        </div>
        <div className="homeBox_rent col-4" onClick={() => setType("اجاره")}>
          اجاره
        </div>
      </div>

      <div className="homeBox_down_side col-12">
        <HomeDropBox />

        <button className="homeBox_btn"> جستجو </button>
      </div>
      <DetailsBox type={type} city={city} setCity={setCity} />
    </div>
  );
}

const DetailsBox: React.FC<{
  type: "خرید" | "رهن" | "اجاره";
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}> = ({ type, city, setCity }) => {
  return (
    <div>
      <DetailItem
        title="شهر"
        items={["تهران", "اصفهان", "شیراز"]}
        state={city}
        setState={setCity}
      />
      <DetailItem title="منطقه" items={["الهیه", "ولنجک", "شهران"]} />
      <DetailItem
        title="متراژ"
        items={["100 meter", "200 meter", "300 meter"]}
      />

      
      {type === "خرید" ? (
        <>
          <DetailItem
            title="قیمت"
            items={["100 میلیون", "200 میلیون", "300 میلیون"]}
          />
        </>
      ) : type === "رهن" ? (
        <>
          <DetailItem
            title="ودیعه"
            items={["100 میلیون", "200 میلیون", "300 میلیون"]}
          />
        </>
      ) : (
        <>
          <DetailItem
            title="ودیعه"
            items={["100 میلیون", "200 میلیون", "300 میلیون"]}
          />
          <DetailItem
            title="اجاره"
            items={["5 میلیون", "10 میلیون", "15 میلیون"]}
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
  state?: string;
  setState?: React.Dispatch<React.SetStateAction<string>>;
}> = ({ title, items, state, setState }) => {
  return (
    <div className="detail_container">
      <p className="detail_title">{title}</p>
      <div className="dropdown_container">
        {items.map((item, index) => (
          <div
            onClick={() => {
              if (setState) setState(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
