import UserPageHeader from "../components/userPageHeader";
import Image from "next/image";
import "../styles/userpagefirtpage.css";
export default function Userpagefirstpage(){
    return(
   
    <div className="userpage_box col-6">
      <UserPageHeader />
      <div className="userpage_inside">
        <div className="userpage_rightside_inputs">
          <p>نام</p>
          <input type="text" placeholder="نام خود را وارد نمایید."></input>
          <p>نام خانوادگی</p>
          <input
            type="text"
            placeholder="نام خانوادگی خود را وارد نمایید."
          ></input>
          <p>شماره همراهی</p>
          <input
            type="text"
            placeholder="98 |"
            style={{ direction: "ltr", paddingLeft: "10px" }}
          ></input>
        </div>
        <div className="userpage_leftside_inputs">
          <p>رمز عبور قبلی</p>
          <input
            type="text"
            placeholder="رمز عبور قبلی خود را وارد نمایید."
          ></input>
          <p>رمز عبور جدید</p>
          <input
            type="text"
            placeholder="رمز عبور جدید خود را وارد نمایید"
          ></input>
          <p> ایمیل</p>
          <input
            type="text"
            placeholder="abcd@gmail.com"
            style={{ direction: "ltr", paddingLeft: "10px" }}
          ></input>
        </div>
        <Image
          alt=""
          width={190}
          height={190}
          src={"/image/profilepic.png"}
          className="userpage_profile"
        ></Image>
      </div>
    </div>)
}