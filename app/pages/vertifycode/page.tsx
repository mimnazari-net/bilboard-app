"use client";
// import link
import Link from "next/link";
// import css
import "../../../styles/vertificationCode.css";
import { useState } from "react";

export default function VertificationCode() {
  const [digit1, setDigit1] = useState<string>("");
  const [digit2, setDigit2] = useState<string>("");
  const [digit3, setDigit3] = useState<string>("");
  const [digit4, setDigit4] = useState<string>("");

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangeDigit1 = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDigit1(e.target.value);
    }
  };
  const handleChangeDigit2 = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDigit2(e.target.value);
    }
  };
  const handleChangeDigit3 = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDigit3(e.target.value);
    }
  };
  const handleChangeDigit4 = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDigit4(e.target.value);
    }
  };

  return (
    <div className="vertificationCode_container col-12">
      <div className="vertificationCode_right_side col-6">
        <div className="vertificationCode_right_content col-5">
          <p>کد تایید را وارد نمایید.</p>
          <div className="ertificationCode_right_inputs ">
            <input
              onChange={handleChangeDigit1}
              maxLength={1}
              type="text"
              placeholder="4"
            />
            <input
              onChange={handleChangeDigit2}
              maxLength={1}
              type="text"
              placeholder="3"
            />
            <input
              onChange={handleChangeDigit3}
              maxLength={1}
              type="text"
              placeholder="2"
            />
            <input
              onChange={handleChangeDigit4}
              maxLength={1}
              type="text"
              placeholder="1"
            />
          </div>
          <Link href="/">
            <button className="col-12">ورود</button>
          </Link>
        </div>
      </div>
      <div className="vertificationCode_left_side col-6"></div>
    </div>
  );
}
