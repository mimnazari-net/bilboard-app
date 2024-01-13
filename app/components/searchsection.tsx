"use client";
import { useRouter } from "next/navigation";
import "../../styles/searchsection.css";
import Image from "next/image";
export default function SearchSection() {
  const router = useRouter();


  return (
    <div className="searchsection_container">
      <hr className="searchsection_hr col-12" />
      <Image
        className="searchsection_img"
        alt=""
        width={ typeof window !== 'undefined' ? window.innerWidth >= 600 ? 150 : 50 : 50}
        height={ typeof window !== 'undefined' ?  window.innerWidth >= 600 ? 150 : 50 : 50}
        src={"/image/searchsection.png"}
      ></Image>
      <h1>در پیدا کردن خانه مورد نظر خود، تردید دارید؟</h1>
      <p>
        با جستجو در نزدیک ترین آژانس املاک منطقه مورد نظر خود، بهترین گزینه ها
        را برای انتخاب پیدا کنید.
      </p>
      <button onClick={() => router.push("/pages/consultant")}>
        جستجوی آژانس املاک
      </button>
    </div>
  );
}
