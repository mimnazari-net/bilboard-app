// import css
import "../styles/error.css";
//import image
import Image from "next/image";

export default function Notfound() {
  return (
    <div className="error_container">
      <div className="error_left_side">
        <Image
          className="error_img"
          alt="image404"
          width={500}
          height={600}
          src={"/image/error404.jpeg"}
        ></Image>
      </div>
      <div className="error_right_side">
        <h1 className="error_h1"> 404 </h1>
        <p className="error_p">مشکلی پیش آمده است! مجدد تلاش کنید</p>
        <button className="error-btn">بازگشت به صفحه اصلی</button>
      </div>
    </div>
  );
}
