//import css
import Image from "next/image";
import "../../styles/footer.css";
//import Link
import Link from "next/link";
//import icons
import {
  BiLogoInstagram,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";

export default function Footer() {
  return (
    <div className="footer_container">
      {/* up section */}
      <div className="footer_image ">
        <p className="footer_image_text_title">
          برای فروش ملک خود، به مشکل خورده اید؟
        </p>
        <p className="footer_image_text_desc">
          با تیم مشاوران بیلبورد، به جواب پرسش های خود می رسید.{" "}
        </p>
        <button className="footer_image_button">درخواست مشاوره</button>
      </div>
      {/* center section */}
      <div className="footer_texts_container ">
        <div className="footer_texts">
          
            <div className="footer_texts_city_col">
              <p>شهرهای محبوب</p>
              <div>تهران </div>
              <div>کیش </div>
              <div>مازندران </div>
              <div>مشهد </div>
            </div>

            <div className="footer_texts_disrtict_col">
              <p>محله های محبوب</p>
              <div>نیاوران </div>
              <div>پاسداران </div>
              <div>نارمک </div>
              <div>فرمانیه </div>
            </div>

            <div className="footer_texts_search_col">
              <p>بیشترین جستجو </p>
              <div>خرید زمین </div>
              <div>خرید ویلا زیباکنار</div>
              <div>ویلا دوبلکس </div>
              <div>آپارتمان ارزان </div>
            </div>
          
            {/* تماس با ما */}
            <div className="footer_texts_contactUs">
              <p>تماس با ما</p>
              <div>تلفن پشتیبانی : 09126248752 - 09126582211</div>
              <div>آدرس : تهران - میدان مهر - شرکت گستران</div>
              <div>ایمیل : amlak@gmail.com</div>
              <div className="footer_texts_socials ">
                <div>شبکه های اجتماعی :</div>
                <div className="footer_texts_socials_icons col-5">
                  <div className="footer_texts_socials_icon_bg">
                    <Link href={"/"}>
                      <BiLogoInstagram className="footer_texts_socials_icon" />
                    </Link>
                  </div>
                  <div className="footer_texts_socials_icon_bg">
                    <Link href={"/"}>
                      <BiLogoTelegram className="footer_texts_socials_icon" />
                    </Link>
                  </div>
                  <div className="footer_texts_socials_icon_bg">
                    <Link href={"/"}>
                      <BiLogoTwitter className="footer_texts_socials_icon" />
                    </Link>
                  </div>
                  <div className="footer_texts_socials_icon_bg">
                    <Link href={"/"}>
                      <BiLogoWhatsapp className="footer_texts_socials_icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* درباره ما */}
            <div className="footer_texts_aboutUs ">
              <p>درباره ما</p>
              <div className="footer_texts_aboutUs_desc">
                به عنوان اولین سایت ملکی جهانی در ایران، بهترین مرجع برای ثبت آگهی
                فروش و رهن و اجاره ملک می باشد.
              </div>
              <div className="footer_texts_email_title">
                ایمیل خود را برای دریافت اخبار جدید وارد کنید.
              </div>
              <div className="footer_texts_email col-12">
                <input
                  type="email"
                  className="col-9"
                  placeholder=".ایمیل خود را وارد نمایید"
                />
                <button className="col-3">ثبت </button>
              </div>
            </div>
        
        </div>
        {/* bottom section */}
        <div className="footer_product ">
          <hr className="footer_line" />
          <div className="footer_line_down ">
            <div className="footer_product ">
              کلیه حقوق این سایت متعلق به شرکت کلان داده گستران می باشد.
            </div>
            <div className="">
              <Image
                src={"/image/footer/e-namad1.png"}
                width={56}
                height={43}
                alt=""
              />
              <Image
                src={"/image/footer/e-namad2.png"}
                width={38}
                height={48}
                alt=""
              />
              <Image
                src={"/image/footer/e-namad3.png"}
                width={39}
                height={48}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
