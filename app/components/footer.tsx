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
          با تیم مشاوران بیلبورد، به جواب پرسش های خود می رسید.
        </p>
        <button className="footer_image_button">درخواست مشاوره</button>
      </div>
      {/* center section */}
      <div className="footer_texts_container ">
        <div className="footer_texts">
          <div className="footer_texts_city_col">
            <p className="footer_text_title">شهرهای محبوب</p>
            <div className="footer_text_dec">
              <p>تهران</p>
              <p>کیش</p>
              <p>مازندران</p>
              <p>مشهد</p>
            </div>
          </div>

          <div className="footer_texts_disrtict_col">
            <p className="footer_text_title">محله های محبوب</p>
            <div className="footer_text_dec">
              <p>نیاوران </p>
              <p>پاسداران </p>
              <p>نارمک </p>
              <p>فرمانیه </p>
            </div>
          </div>

          <div className="footer_texts_search_col">
            <p className="footer_text_title">بیشترین جستجو </p>
            <div className="footer_text_dec">
              <p>خرید زمین </p>
              <p>خرید ویلا زیباکنار</p>
              <p>ویلا دوبلکس </p>
              <p>آپارتمان ارزان </p>
            </div>
          </div>

          {/* تماس با ما */}
          <div className="footer_texts_contactUs">
            <p className="footer_text_title">تماس با ما</p>
            <div className="footer_text_dec">
              <p>تلفن پشتیبانی : 09126248752 - 09126582211</p>
              <p>آدرس : تهران - میدان مهر - شرکت گستران</p>
              <p>ایمیل : amlak@gmail.com</p>
              <div className="footer_texts_socials ">
                <p>شبکه های اجتماعی :</p>

                <div className="footer_texts_socials_icons">
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
          </div>
          {/* درباره ما */}
          <div className="footer_texts_aboutUs ">
            <p className="footer_text_title">درباره ما</p>
            <div className="footer_aboutUs_desc">
              <p className="footer_texts_aboutUs_desc">
                به عنوان اولین سایت ملکی جهانی در ایران، بهترین مرجع برای ثبت
                آگهی فروش و رهن و اجاره ملک می باشد.
              </p>
              <p className="footer_email_title">
                ایمیل خود را برای دریافت اخبار جدید وارد کنید.
              </p>
              <div className="footer_texts_email ">
                <input type="email" placeholder=".ایمیل خود را وارد نمایید" />
                <button>ثبت </button>
              </div>
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
            <div className="footer_product_img">
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
