import "../styles/eror.css"
import Image from "next/image"
export default function Eror(){
    return(
        <div className="kol">
            <div className="error-left-side">
                <Image className="eror-img"
                alt="404"
                width={500}
                height={600}
                src={"/image/image.png.jpeg"}
                 ></Image>
            </div>
            <div className="error-right-side">
                <h1 className="ch-o-ch"> ۴۰۴ </h1>
                <p className="ch-p">مشکلی پیش آمده است! مجدد تلاش کنید</p>
                <button className="eror-btn">بازگشت به صفحه اصلی</button>
            </div>
        </div>
    )
}