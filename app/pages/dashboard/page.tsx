"use client";
import UserAccount from "@/app/components/UserAccount";
import "../../../styles/userPage.css";
import Image from "next/image";
import { RiUser6Line } from "react-icons/ri";
import { IoExitOutline, IoRefresh } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logOut, showComponents } from "@/redux/bilboardSlice";
import { RootState } from "@/redux/store";
import SubmitInfo from "@/app/components/submitInfo";
import Recentvisits from "@/app/components/recentvisits";
import Link from "next/link";
import { useRouter } from "next/router";

export default function UserPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedComponent = useSelector(
    (state: RootState) => state.bilboardSlice.selectedComp
  );

  return (
    <div className="userpage_container col-12 ">
      <div className="userpage_content col-10">
        <div className="col-3">
          <div className="userpagebox_box col-12">
            <Image
              alt=""
              width={100}
              height={95}
              src={"/image/userpgelayer.png"}
            ></Image>
            <div className="userpagebox_link_col">
              <RiUser6Line size={24} />
              <button
                onClick={() => dispatch(showComponents("0"))}
                className="userpagebox_button"
              >
                صفحه کاربری
              </button>
            </div>
            <hr />
            <div className="userpagebox_link_col">
              <MdOutlineArticle size={24} />
              <button
                onClick={() => dispatch(showComponents("1"))}
                className="userpagebox_button"
              >
                ثبت آگهی
              </button>
            </div>
            <hr />
            <div className="userpagebox_link_col">
              <IoRefresh size={24} />
              <button
                onClick={() => dispatch(showComponents("2"))}
                className="userpagebox_button"
              >
                بازدیدهای اخیر
              </button>
            </div>
            <hr />
            <div className="userpagebox_link_col">
              <IoExitOutline size={24} />

              <button
                onClick={() => {
                  router.replace("/");
                  dispatch(logOut(false));
                }}
                className="userpagebox_button"
              >
                خروج
              </button>
            </div>
          </div>
        </div>
        <div className="col-8">
          {selectedComponent === "0" ? (
            <UserAccount />
          ) : selectedComponent === "1" ? (
            <SubmitInfo />
          ) : selectedComponent === "2" ? (
            <Recentvisits />
          ) : (
            <UserAccount />
          )}
        </div>
      </div>
    </div>
  );
}
