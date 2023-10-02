"use client";
import { useState } from "react";

//import css
import "../../styles/homeBox.css";

import HomeDropBox from "./homeDropBox";

export default function HomeBox() {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");

  return (
    <div className="homeBox_container col-9">
      <div className="homeBox_up_side col-3">
        <div className="homeBox_buy col-4">خرید</div>
        <div className="homeBox_mortage col-4">رهن</div>
        <div className="homeBox_rent col-4">اجاره</div>
      </div>

      <div className="homeBox_down_side col-12">
        <HomeDropBox />

        <button className="homeBox_btn"> جستجو </button>
      </div>
    </div>
  );
}
