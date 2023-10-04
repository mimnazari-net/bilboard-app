import "../styles/error.css";
import Image from "next/image";
export default function Notfound() {
  return (
    <div className="error_container">
      <div className="error_left_side">
        <Image
          className="eror_img"
          alt="image404"
          width={500}
          height={600}
          src={"/image/error404.jpeg"}
        ></Image>
      </div>
      <div className="error_right_side">
        <h1 className="eror_h1"> 404 </h1>
        <p className="eror_p">مشکلی پیش آمده است! مجدد تلاش کنید</p>
        <button className="eror-btn">بازگشت به صفحه اصلی</button>
      </div>
    </div>
  );
}
