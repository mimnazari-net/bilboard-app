"use client";
import UserAccount from "../../components/UserAccount";
import "../../../styles/userPage.css";
import Image from "next/image";
import { RiUser6Line } from "react-icons/ri";
import { IoExitOutline, IoRefresh } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logOut, showComponents } from "@/redux/bilboardSlice";
import { RootState } from "../../../redux/store";
import SubmitInfo from "../../components/submitInfo";
import Recentvisits from "../../components/recentvisits";
import { useRouter } from "next/navigation";

export default function UserPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedComponent = useSelector(
    (state: RootState) => state.bilboardSlice.selectedComp
  );

  return (
    <main className="userpage_main">
      <div className="userpage_container  ">
        <div className="userpage_content ">
          <div className="userpage_content_right">
            <div className="userpagebox_box ">
              {typeof window !== "undefined" ? (
                window.innerWidth <= 320 ? (
                  ""
                ) : (
                  <Image
                    alt=""
                    width={100}
                    height={95}
                    src={"/image/userpgelayer.png"}
                  ></Image>
                )
              ) : (
                ""
              )}
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
                <IoRefresh
                  size={
                    24
                  }
                />
                <button
                  onClick={() => dispatch(showComponents("2"))}
                  className="userpagebox_button"
                >
                  بازدیدهای اخیر
                </button>
              </div>
              <hr />
              <div className="userpagebox_link_col">
                <IoExitOutline
                  size={
                    24
                  }
                />

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
          <div className="userpage_content_left">
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
    </main>
  );
}
