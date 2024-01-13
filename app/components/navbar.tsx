"use client";
import Link from "next/link";
import Image from "next/image";
import "../../styles/navbar.css";
import { FaChevronDown } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";
import CategoryNavbar from "./categoryNavbar";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import PersistentDrawerLeft from "./hbrgrmenue";

export default function Navbar() {
  const isLoginUser: boolean = useSelector(
    (state: RootState) => state.bilboardSlice.isLogin
  );

  const userInfo = useSelector((state: RootState) => state.bilboardSlice.user);

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="navbar_container">
      <div className="navbar_container_content">
        <div className="navbar_contant ">
          <div
            className="navbar_maindiv"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              height: "100vh",
            }}
          >
            <div className="navbar_right_side ">
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
              <div className="navbar_right_side_group  ">
                <button
                  className="navbar_btn"
                  onClick={() => setIsHovering(!isHovering)}
                >
                  دسته بندی ها{" "}
                  <FaChevronDown
                    style={{
                      rotate: isHovering ? "180deg" : "0deg",
                      marginTop: "2px",
                      marginRight: "5px",
                    }}
                  />
                </button>
              </div>
              <Link className="navbar_link" href={"/pages/advertisments"}>
                آگهی ها
                </Link>
                <Link className="navbar_link" href={"/pages/consultant"}>
                  املاک 
                </Link>
                <Link className="navbar_link" href={"/"}>
                  خانه 
                </Link>
            </div>
            <div className="navbar_left_side">
              <div className="navbar_left_search ">
                <RiSearch2Line
                  style={{ fontSize: "23px", marginLeft: "16px" }}
                />
                <Link className="navbar_link" href={"/pages/advertisments"}>
                  جستجو
                </Link>
              </div>
              <hr />
              <div className="navbar_left_add ">
                <AiOutlinePlusCircle
                  style={{ fontSize: "23px", marginLeft: "16px" }}
                />
                <Link
                    className="navbar_left_user_text"
                    href={""}
                  >
                  افزودن ملک
                  </Link>
              </div>
              <hr />
              <div className="navbar_left_user">
                <PiUserCircle
                  style={{ fontSize: "25px", marginLeft: "16px" }}
                />

                {isLoginUser ? (
                  <Link
                    className="navbar_left_user_text"
                    href={"/pages/dashboard"}
                  >
                    <span> {userInfo.userName} </span>
                  </Link>
                ) : (
                  <div className="navbar_left_user_text ">
                    <span>ورود</span>
                    <p>|</p>
                    <Link className="navbar_link" href={"/pages/register"}>
                      <span>عضویت </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar_category ">{isHovering && <CategoryNavbar />}</div>
      <PersistentDrawerLeft />
    </div>
  );
}
