// import css
import "../../styles/userPageHeader.css";
// import icons
import { LuSearch } from "react-icons/lu";
import { RiHome5Line } from "react-icons/ri";
// import image
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function UserPageHeader() {
  const userinfo = useSelector((state: RootState) => state.bilboardSlice.user);
  return (
    <div className="userPage_header col-12">
      <div className="userPage_header_rightside col-3">
        <Image
          alt=""
          width={72}
          height={72}
          src={"/image/Frame162.png"}
        ></Image>
        {userinfo.userName} <br />
        {userinfo.phoneNumber}
      </div>
      <div className="userPage_header_leftside col-3">
        <p>جستجو</p>
        <LuSearch size={24} />
        <hr className="userpage_header_hr" />
        <p>خانه</p>
        <RiHome5Line size={24} />
      </div>
    </div>
  );
}
