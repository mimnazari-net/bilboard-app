"use client";
import "../../../styles/register.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [agree, setAgree] = useState<boolean>(false);

  const router = useRouter();
  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangePhoneNumber = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPhoneNumber(e.target.value);
    }
  };

  const handleChangeUsername = (e: InputEvent) => {
    const regex = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setUsername(e.target.value);
    }
  };

  const handleChangeAgreeRules = (e: InputEvent) => {
    const checked = e.target.checked;
  };

  return (
    <div className="register_container col-12">
      <div className="register_right_side col-5">
        <div className="register_right_side_container col-6">
          <p className="register_right_side_title">خوش آمدید!</p>

          <div className="register_right_side_inputs">
            <div className="register_right_side_inputs_i">
              <FaRegUser />
            </div>
            <input
              value={username}
              maxLength={30}
              onChange={handleChangeUsername}
              className="col-12"
              placeholder="نام و نام خانوادگی"
            />
          </div>

          <div className="register_right_side_inputs">
            <div className="register_right_side_inputs_i2">
              <AiOutlinePhone />
            </div>
            <input
              value={phoneNumber}
              maxLength={11}
              onChange={handleChangePhoneNumber}
              className="col-12"
              placeholder="شماره تماس"
            />
          </div>

          <div className="register_ruls">
            <input
              type="checkbox"
              name="agreement"
              onChange={handleChangeAgreeRules}
            />
            <p>تمامی ضوابط و قوانین را می پذیرم.</p>
          </div>

          <button
            disabled={agree}
            className="register_btn col-12"
            onClick={() => {
              // if (username !== "" && phoneNumber !== "" && agree === false) {
                router.replace("/pages/vertifycode");
              // }
            }}
          >
            دریافت کد تایید
          </button>
        </div>
      </div>
      <div className="register_left_side col-7"></div>
    </div>
  );
}
