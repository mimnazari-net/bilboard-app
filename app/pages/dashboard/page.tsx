import UserAccount from "@/app/components/UserAccount";
import "../../../styles/userPage.css";
import Image from "next/image";
import Link from "next/link";
import { RiUser6Line } from "react-icons/ri";
import { IoExitOutline, IoRefresh } from "react-icons/io5";
import { MdOutlineArticle } from "react-icons/md";

export default function UserPage() {
  return (
    <div className="userpage_container col-12 ">
      <div className="userpage_content col-11">
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
              <Link href={""} className="userpagebox_link">
                صفحه کاربری
              </Link>
            </div>
            <hr />
            <div className="userpagebox_link_col">
              <MdOutlineArticle size={24} />
              <Link href={""} className="userpagebox_link">
                ثبت آگهی
              </Link>
            </div>
            <hr />
            <div className="userpagebox_link_col">
              {" "}
              <IoRefresh size={24} />{" "}
              <Link href={""} className="userpagebox_link">
                بازدیدهای اخیر
              </Link>
            </div>
            <hr />
            <div className="userpagebox_link_col">
              <IoExitOutline size={24} />{" "}
              <Link href={""} className="userpagebox_link">
                خروج
              </Link>
            </div>
          </div>
        </div>
        <div className="col-8">
          <UserAccount />
        </div>
      </div>
    </div>
  );
}
