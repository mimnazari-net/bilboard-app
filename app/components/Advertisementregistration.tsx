import "../../styles/Advertisementregistration.css";
import Image from "next/image";
export default function Advertisementregistration() {
  return (
    <div className="advertisingreg_box col-12">
      <div className="advertisingreg_inside col-12">
        {" "}
        <div className="adveritingreg_text col-6">
          <p>آگهی مورد نظر با موفقیت ثبت شد!</p>
          <button>بازگشت به صفحه اصلی</button>
        </div>
        <Image
          alt=""
          width={330}
          height={350}
          src={"/image/adverregpic.png"}
        ></Image>
      </div>
    </div>
  );
}
