import Link from "next/link";
import Image from "next/image";
import "../styles/header.css";
export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="header_leftside">
          {" "}
          <Image
            className="header_leftside_image"
            alt="jostojo"
            src={"/image/search-normal.png"}
            width={24}
            height={24}
          ></Image>
          <button> جستجو</button><hr/>
          <Image
            className="header_leftside_image"
            alt="afzudan"
            src={"/image/add-circle.png"}
            width={24}
            height={24}
          ></Image>
          <button> افزودن ملک</button><hr/>
          <Image
            className="header_leftside_image"
            alt="vurud"
            src={"/image/profile-circle.png"}
            width={24}
            height={24}
          ></Image>
          <Link href={""} className="navbar-link">
            {" "}
            ورود | عضویت
          </Link>
        </div>
        <div className="header_rightside">
          <Image
            className="header_rightside_image"
            alt="layer"
            width={60}
            height={50}
            src={"/image/Layer 1.png"}
          ></Image>
          <label className="header_label">دسته بندی ها</label>
          <select className="header_selectbox"></select>
          <button>خرید زمین</button>
          <button>درخواست مشاور </button>
          <button>وبلاگ</button>
        </div>
      </nav>
    </header>
  );
}
