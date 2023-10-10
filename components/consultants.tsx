// import css
import "../styles/consultants.css";
// import image
import Image from "next/image";
// import material
import Rating from "@mui/material/Rating";

export default function Consultants() {
 

  // data
  const consultant = [
    {
      image: "/image/Frame 67.png",
      loc: "نیاوران",
      text: "مشاورین املاک ققنوس",
      star: "3",
    },
    {
      image: "/image/gheytariye.png",
      loc: "اندرزگو",
      text: " مشاورین املاک قیطریه ",
      star: "4",
    },
    {
      image: "/image/salamat.png",
      loc: "اقدسیه",
      text: "  مشاورین املاک سلامت ",
      star: "4",
    },
    {
      image: "/image/atiye.png",
      loc: "فرشته",
      text: "مشاورین املاک آتیه ",
      star: "3",
    },
    {
      image: "/image/imaz.png",
      loc: "فرمانیه",
      text: " مشاورین املاک ایماز ",
      star: "5",
    },
    {
      image: "/image/ghaf.png",
      loc: "کامرانیه",
      text: "مشاورین املاک قاف",
      star: "2",
    },
    {
      image: "/image/malakuti.png",
      loc: "صاحبقرانیه",
      text: "  مشاورین املاک ملکوتی ",
      star: "3",
    },
    {
      image: "/image/atiyee.png",
      loc: "یاسر",
      text: "مشاورین املاک آتیه ",
      star: "5",
    },
  ];
  return (
    <div className="moshaverin_container">
      <h1>مشاورین املاک منتخب در سطح کشور</h1>
      <div className="moshaverin-kol">
        {consultant.map((item, index) => {
          return (
            <div className="moshaverin_map" key={index}>
              <Image
                className="moshaverin-pic"
                alt="moshaverin"
                width={278}
                height={183}
                src={item.image}
              ></Image>
              <div className="moshaverin-tik">
                <div className="moshverin-right-tik">
                  {" "}
                  <Image
                    alt="tik-abi"
                    width={16}
                    height={15}
                    src={"/image/Group.png"}
                  ></Image>
                  <p className="moshaverin-tik-p">{item.text}</p>
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
                    <p className="moshaverin-tehran">{item.loc}</p>{" "}
                  </div>
                  <Rating
                    className="moshaverin-stars"
                    name="size-medium"
                    defaultValue={parseInt(item.star)}
                    readOnly
                  />
                </div>
                <button className="moshaverin-profile">نمایش پروفایل </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
