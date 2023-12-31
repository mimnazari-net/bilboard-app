//import css
import Link from "next/link";
import "../../styles/categoryNavbar.css";
//import image
import Image from "next/image";

export default function CategoryNavbar() {
  //data
  const homes = [
    { image: "/image/homeGroupNav/garden-icon.png", text: "باغ" },
    { image: "/image/homeGroupNav/maskuni-icon.png", text: "مجتمع مسکونی" },
    { image: "/image/homeGroupNav/shop-icon.png", text: "مغازه" },
    { image: "/image/homeGroupNav/tejari-icon.png", text: "ملک تجاری" },
    { image: "/image/homeGroupNav/edari-icon.png", text: "ملک اداری" },
    { image: "/image/homeGroupNav/vilai-icon.png", text: "ویلایی" },
    { image: "/image/homeGroupNav/kolangi-icon.png", text: "کلنگی" },
    { image: "/image/homeGroupNav/apartman-icon.png", text: "آپارتمان" },
    { image: "/image/homeGroupNav/zamin-icon.png", text: "زمین" },
  ];

  return (
    <div className="category_container ">
      <div className="category_img">
        {homes.map((item, index) => {
          return (
            <div key={index}>
              <Link 
              className="category_map_link"
              href={"/pages/advertisments"}>
                <Image
                  alt="homes"
                  width={32}
                  height={32}
                  src={item.image}
                ></Image>
                <p>{item.text}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
