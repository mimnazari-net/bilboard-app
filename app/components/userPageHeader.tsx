// import css
import "../../styles/userPageHeader.css";
// import icons
import { LuSearch } from "react-icons/lu";
import { RiHome5Line } from "react-icons/ri";
// import image
import Image from "next/image";

export default function UserPageHeader() {
  return (
    <div className="userPage_header col-12">
      <div className="userPage_header_rightside col-3">
        <div className="col-8"> <Image
          alt=""
          width={72}
          height={72}
          src={"/image/Frame162.png"}
        ></Image></div>
       
        زهرا آقایی <br />
        09201108238
      </div>
      <div className="userPage_header_leftside col-3">
        <p>جستجو</p>
        <LuSearch size={24}  />
        <hr className="userpage_header_hr"/>
        <p>خانه</p>
        <RiHome5Line size={24} />
      </div>
    </div>
  );
}
