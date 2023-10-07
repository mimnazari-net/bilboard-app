// import css
import "../styles/userPageHeader.css";
// import icons
import { LuSearch } from "react-icons/lu";
import { RiHome5Line } from "react-icons/ri";
// import image
import Image from "next/image";

export default function UserPageHeader() {
  return (
    <div className="userPage_header">
      <div className="userPage_header_rightside">
        <Image
          alt=""
          width={72}
          height={72}
          src={"/image/Frame162.png"}
        ></Image>
        زهرا آقایی <br />
        09201108238
      </div>
      <div className="userPage_header_leftside">
        <p>جستجو</p>
        <LuSearch size={24}  />
        <hr className="userpage_header_hr"/>
        <p>خانه</p>
        <RiHome5Line size={24} />
      </div>
    </div>
  );
}
