import "../styles/moshaverin.css";
import Image from "next/image";
import Rating from "@mui/material/Rating";
export default function Moshaverin() {
  return (
    <div className="container">
      <div className="moshaverin-kol">
        <Image
          className="moshaverin-pic"
          alt="moshaverin"
          width={278}
          height={183}
          src={"/image/Frame 67.png"}
        ></Image>
        <div className="moshaverin-tik">
          <div className="right-tik">
            {" "}
            <Image
              alt="tik-abi"
              width={16}
              height={15}
              src={"/image/Group.png"}
            ></Image>
            <p className="tik-p">مشاورین املاک ققنوس</p>
          </div>
          <Image
            alt="save"
            width={24}
            height={24}
            src={"/image/save-2.png"}
          ></Image>
        </div>
        <div className="moshaverin-mid">
          <div className="moshaverin-bottom">
            <div className="moshaverin-loc">
              <Image
                alt="loc"
                width={16}
                height={16}
                src={"/image/location.png"}
              ></Image>
              <p className="tehran">تهران</p>{" "}
            </div>

            <Rating className="stars" name="size-medium" defaultValue={2} readOnly />
          </div>
          <button className="profile">نمایش پروفایل </button>
        </div>
      </div>
    </div>
  );
}
