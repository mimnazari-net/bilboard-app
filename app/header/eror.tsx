import "../styles/eror.css"
import Image from "next/image"
export default function Eror(){
    return(
        <div className="eror_kol">
            <div className="error_leftside">
                <Image className="eror_img"
                alt="404"
                width={500}
                height={600}
                src={"/image/image.png.jpeg"}
                 ></Image>
            </div>
            <div className="error_rightside">
                <h1 className="eror_h1"> ۴۰۴ </h1>
                <p className="eror_p">مشکلی پیش آمده است! مجدد تلاش کنید</p>
                <button className="eror-btn">بازگشت به صفحه اصلی</button>
            </div>
        </div>
    )
}