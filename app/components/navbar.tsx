"use client"
import Link from "next/link";
import Image from "next/image";
import "../../styles/navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";

import { categoryNavbar } from "../components/categoryNavbar";
import { useState } from "react";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="navbar_container clo-12">
      <div className="navbar_contant col-10">
        <div className="navbar_right_side col-5">
          <div className="navbar_right_side_logo">
            <Link href={"/"}>
              <Image
                alt="logo image"
                width={60}
                height={50}
                src={"/image/logo.png"}
              ></Image>
            </Link>
          </div>
          <div className="navbar_right_side_group col-3 ">
            <button
              className="navbar_btn"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              دسته بندی ها
            </button>
            {/* <p className="navbar_label">دسته بندی ها</p> */}
            <FaChevronDown style={{ marginTop: "5px" }} />
          </div>
          <p>خرید زمین</p>
          <p>درخواست مشاور </p>
          <p>وبلاگ</p>
        </div>
        <div className="navbar_left_side col-5 ">
          <div className="navbar_left_search col-2">
            <RiSearch2Line style={{ fontSize: "23px" }} />
            <Link className="navbar_link" href={"/pages/advertisments"}>
              جستجو
            </Link>
          </div>
          <hr />
          <div className="navbar_left_add col-3">
            <AiOutlinePlusCircle style={{ fontSize: "23px" }} />
            <p>افزودن ملک</p>
          </div>
          <hr />
          <div className="navbar_left_user col-4">
            <PiUserCircle style={{ fontSize: "25px" }} />
            <span>ورود</span>
            <p>|</p>
            <Link className="navbar_link" href={"/pages/register"}>
              <span>عضویت</span>
            </Link>
          </div>
        </div>
      </div>
      {isHovering && ( <categoryNavbar/>)}
    </div>
  );
}