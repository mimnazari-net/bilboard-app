"use client";
import "../../styles/userPageBox.css";
import Image from "next/image";
import { RiUser6Line } from "react-icons/ri";
import { IoExitOutline, IoRefresh } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { useState } from "react";
export default function UserPageBox() {
  const [show, setShow] = useState("");
  return (
    <div className="userpagebox_box col-6">
      <Image
        alt=""
        width={100}
        height={95}
        src={"/image/userpgelayer.png"}
      ></Image>
      <div className="userpagebox_button_col">
        <RiUser6Line size={24} />
        <button className="userpagebox_button" onClick={() => setShow("صفحه کاربری")}>
          صفحه کاربری
        </button>
      </div>
      <hr />
      <div className="userpagebox_button_col">
        <MdOutlineArticle size={24} />
        <button className="userpagebox_button" onClick={() => setShow("ثبت اگهی")}>
          ثبت آگهی
        </button>
      </div>
      <hr />
      <div className="userpagebox_button_col">
        {" "}
        <IoRefresh size={24} />{" "}
        <button className="userpagebox_button" onClick={() => setShow("بازدیدها")}>
          بازدیدهای اخیر
        </button>
      </div>
      <hr />
      <div className="userpagebox_button_col">
        <IoExitOutline size={24} />{" "}
        <button className="userpagebox_button" onClick={() => setShow("خروج")}>
          خروج
        </button>
      </div>
    </div>
  );
}
