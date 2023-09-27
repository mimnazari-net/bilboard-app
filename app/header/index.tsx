import Link from "next/link";
import Image from "next/image";
import "../styles/header.css";
export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="left-side">
          {" "}
          <Image
            className="left-side-image"
            alt="jostojo"
            src={"/image/search-normal.png"}
            width={24}
            height={24}
          ></Image>
          <button> جستجو</button><hr/>
          <Image
            className="left-side-image"
            alt="afzudan"
            src={"/image/add-circle.png"}
            width={24}
            height={24}
          ></Image>
          <button> افزودن ملک</button><hr/>
          <Image
            className="left-side-image"
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
        <div className="right-side">
          <Image
            className="right-side-image"
            alt="layer"
            width={60}
            height={50}
            src={"/image/Layer 1.png"}
          ></Image>
          <label className="label">دسته بندی ها</label>
          <select className="selectbox"></select>
          <button>خرید زمین</button>
          <button>درخواست مشاور </button>
          <button>وبلاگ</button>
        </div>
      </nav>
    </header>
  );
}
