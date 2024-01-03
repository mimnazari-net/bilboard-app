"use client";
import UserPageHeader from "./userPageHeader";
import Image from "next/image";
import "../../styles/UserAccount.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function UserAccount() {
  const user = useSelector((state: RootState) => state.bilboardSlice.user);

  let fullNameSlice = user.userName.split(" ");

  const [name, setName] = useState(fullNameSlice[0]);
  const [familyName, setfamilyName] = useState(fullNameSlice[1]);
  const [phoneNumber, setphoneNumber] = useState(user.phoneNumber);
  const [password, setPassword] = useState("");
  const [newPassword, setnewPasword] = useState("");
  const [email, setEmail] = useState("");

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangeName = (e: InputEvent) => {
    const regex = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/;
    if (regex.test(e.target.value)) {
      setName(e.target.value);
    }
  };

  const handleChangeFamilyName = (e: InputEvent) => {
    const regex = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/;
    if (regex.test(e.target.value)) {
      setfamilyName(e.target.value);
    }
  };

  const handleChangePhoneNumber = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (regex.test(e.target.value)) {
      setphoneNumber(e.target.value);
    }
  };



  return (
    <div className="UserAccount_container  ">
      <div className="UserAccount_content ">
        <div className="UserAccount_content_header">
          <UserPageHeader />
        </div>

        <div className="UserAccount_inside ">
          <div className="UserAccount_rightside_inputs ">
            <p>نام</p>
            <input
              value={name}
              onChange={handleChangeName}
              type="text"
              placeholder="نام خود را وارد نمایید."
            ></input>
            <p>نام خانوادگی</p>
            <input
              value={familyName}
              onChange={handleChangeFamilyName}
              type="text"
              placeholder="نام خانوادگی خود را وارد نمایید."
            ></input>
            <p>شماره همراه</p>
            <input
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
              type="text"
              placeholder="+98 |"
              style={{ direction: "ltr",
              paddingRight:"0px" ,
              paddingLeft: "10px" }}
            ></input>
          </div>
          <div className="UserAccount_leftside_inputs ">
            <p>رمز عبور قبلی</p>
            <input
              value={password}
              onChange={
                (e : InputEvent)=>{
                  setPassword(e.target.value)
                }
              }
              type="password"
              placeholder="رمز عبور قبلی خود را وارد نمایید."
            ></input>
            <p>رمز عبور جدید</p>
            <input
              value={newPassword}
              onChange={
                (e : InputEvent)=>{
                  setnewPasword(e.target.value)
                }
              }
              type="password"
              placeholder="رمز عبور جدید خود را وارد نمایید"
            ></input>
            <p> ایمیل</p>
            <input
              value={email}
              onChange={
                (e : InputEvent)=>{
                  setEmail(e.target.value)
                }
              }
              type="email"
              placeholder="abcd@gmail.com"
              style={{ direction: "ltr", paddingRight:"0px" ,paddingLeft: "10px" }}
            ></input>
          </div>
          <Image
            alt=""
            width={190}
            height={190}
            src={"/image/profilepic.png"}
            className="UserAccount_profile"
          ></Image>
        </div>
      </div>
    </div>
  );
}
