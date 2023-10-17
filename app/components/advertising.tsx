import { MdArrowBackIos } from "react-icons/md";
import Image from "next/image";
import "../styles/advertising.css";
export default function Advertising() {
  const property = [
    {
      text: "پلان بدون پرتی",
    },
    {
      text: "فرعی دنج و دیپلمات نشین",
    },
    {
      text: "لابی مجلل هشت متری با لابی من سه شیفت",
    },
    {
      text: "لابی مجلل هشت متری با لابی من سه شیفت",
    },
    {
      text: "پلان مهندسی با جانمایی جادویی",
    },
    {
      text: "استراکچر 52 st",
    },
    {
      text: "سقف عرشه فولادی",
    },
    {
      text: "سقف عرشه فولادی",
    },
    {
      text: "متریال ایتالیایی",
    },
    {
      text: "فرعی دنج و دیپلمات نشین",
    },
    {
      text: "لابی مجلل هشت متری با لابی من سه شیفت",
    },
    {
      text: "فرعی دنج و دیپلمات نشین",
    },
    {
      text: "پلان مهندسی با جانمایی جادویی",
    },
    {
      text: "استراکچر 52 st",
    },
    {
      text: "سقف عرشه فولادی",
    },
    {
      text: "استراکچر 52 st",
    },
  ];

  return (
    <div className="advertising_container col-12">
      <div className="advertising_header col-10">
        <p>فروش</p>
        <MdArrowBackIos size={18} />
        <p>تهران</p>
        <MdArrowBackIos size={18} />
        <p>آپارتمان</p>
        <MdArrowBackIos size={18} />
        <p>قیطریه</p>
        <MdArrowBackIos size={18} />
      </div>
      <div className="advertising_inside col-10">
        <div className="advertising_kol col-12">
          <div className="advertising_rightpic">
            <Image
              alt=""
              width={800}
              height={750}
              src={"/image/right_pic.png"}
            ></Image>
          </div>
          <div className="advertising_leftpic">
            <Image
              alt=""
              width={800}
              height={396}
              src={"/image/left-top-pic.png"}
            ></Image>
            <Image
              alt=""
              width={800}
              height={350}
              src={"/image/left-down-pic.png"}
            ></Image>
          </div>
        </div>
        <div className="advertising_mid col-12">
          <div className="advertising_info col-12">
              <div className="advertising_spn col-11">
              <span className="advertising_sp1 ">
                خانه 615 متری در قیطریه
                <p>دقایقی پیش در قیطریه</p>
              </span>
              <span className="advertising_sp2 ">
                آژانس املاک : نماد زعفرانیه
                <p>تعداد مشاوران : 39</p>
              </span>
              <span className="advertising_sp2 ">
                سال ساخت : 1402
                <p>بیش از 9 ماه فعالیت</p>
              </span>
            </div>
            <div className="advertising_inf col-12">
              <h1 className="col-4">253,000,000,000 تومان</h1>
              <div className="advertising_homeinfo col-7">
                <div>
                  <h1>4</h1>
                  <p>اتاق خواب</p>
                </div>
                <hr />
                <div>
                  <h1>5</h1>
                  <p>سرویس و حمام</p>
                </div>
                <hr />
                <div>
                  <h1>12</h1>
                  <p>طبقه</p>
                </div>
                <hr />
                <div>
                  <h1>4</h1>
                  <p>پارکینگ</p>
                </div>
                <hr />
                <div>
                  <h1>1</h1>
                  <p>انباری</p>
                </div>
                <hr />
                <div>
                  <h1>411,382,000</h1>
                  <p>قیمت هر متر</p>
                </div>
              </div>
             </div>
          
          </div>
         <div className="adevrtising_btn   ">
              <Image alt="" width={320} height={200} src={""}></Image>
              <button >شماره تماس</button>


         </div>
         </div>
      </div>{" "}
      <h1 className="advertising_h col-10">امکانات و ویژگی ها</h1>
      <div className="advertising_property col-10">
        {property.map((item) => {
          return <p className="col-3">{item.text}</p>;
        })}
      </div>
      <hr style={{ width: "83.33%" }} />
      <div className="advertising_carosel col-10">
        <h1>آگهی های مشابه</h1>
      </div>
    </div>
  );
}
