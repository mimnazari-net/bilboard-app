"use client";
import { useState, ChangeEvent } from "react";
import "../../styles/submitInfo.css";
import "../../styles/submitInfo.css";
import UserPageHeader from "./userPageHeader";
import Image from "next/image";
import DropDown from "./dropdown";

import Select, { SelectChangeEvent } from "@mui/material/Select";
export default function SubmitInfo() {
  const [file, setFile] = useState<any>("");
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const [title, setTitle] = useState<string>("");
  const [metraj, setMetraj] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [eachprice, setEachprice] = useState<string>("");
  const [diposit, setDiposit] = useState<string>("");
  const [range, setRange] = useState<string>("");
  const [rent, setRent] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [floor, setFloor] = useState<string>("");
  const [parking, setParking] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [elevator, setElevator] = useState<string>("");
  const [warehouse, setWarehouse] = useState<string>("");

  const [dastebandi, setDastebandi] = useState("");
  const [noemelk, setNoemelk] = useState("");
  const [city, setCity] = useState("");
  const [monaseb, setMonaseb] = useState("");

  function adMetraj(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setMetraj(e.target.value);
    }
  }
  function adPrice(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setPrice(e.target.value);
    }
  }
  function adYear(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setYear(e.target.value);
    }
  }
  function adEachprice(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setEachprice(e.target.value);
    }
  }
  function adDiposit(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDiposit(e.target.value);
    }
  }

  function adRent(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setRent(e.target.value);
    }
  }
  function adRoom(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setRoom(e.target.value);
    }
  }
  function adFloor(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setFloor(e.target.value);
    }
  }
  function adParking(e: React.ChangeEvent<HTMLInputElement>) {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setParking(e.target.value);
    }
  }
 
  return (
    <div className="submitinfo_container col-10">
      <div className="col-11">
        <div className="col-12">
        <UserPageHeader />
        </div>
      <div className="submitinfo_upside col-12">
        <p>عنوان آگهی</p>

        <input className="col-12"
          value={title}
          type="text"
          placeholder="عنوان آگهی خود را بنویسید."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
      </div>
      <div className="submitinfo_mid col-12">
        <div className="submitinfo_mid_things col-4">
          <p>انتخاب دسته بندی </p>
          <div className="submitinfo_dropdowns col-10 ">
            {" "}
            <DropDown
              title="خرید، فروش، اجاره"
              items={["خرید", "فروش", "اجاره"]}
              state={dastebandi}
              setState={setDastebandi}
            />
          </div>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>متراژ</p>

          <input className="col-10"
            type="text"
            placeholder="0 - 3000 متر"
            style={{ direction: "ltr" }}
            onChange={adMetraj}
            value={metraj}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>قیمت کل</p>
          <input className="col-12"
            type="text"
            placeholder="قیمت کل خانه خود را وارد نمایید."
            onChange={adPrice}
            value={price}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>انتخاب نوع ملک</p>
          <div className="submitinfo_dropdowns col-10">
            {" "}
            <DropDown
              title="آپارتمان، ویلا، اداری و..."
              items={[
                "اداری",
                "ویلا",
                "آپارتمان",
                "زمین",
                "کلنگی",
                "ملک تجاری",
                "مغازه",
                "مجتمع مسکونی",
                "باغ",
              ]}
              state={noemelk}
              setState={setNoemelk}
            />
          </div>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>سال ساخت</p>
          <input className="col-10"
            type="text"
            placeholder="سال ساخت را وارد کنید."
            onChange={adYear}
            value={year}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>قیمت هر متر مربع</p>
          <input className="col-12"
            type="text"
            placeholder="قیمت هر متر ملک خود را وارد کنید."
            onChange={adEachprice}
            value={eachprice}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>شهر</p>
          <div className="submitinfo_dropdowns col-10">
            {" "}
            <DropDown
              title="شهر خود را انتخاب کنید."
              items={[
                "تهران",
                "همدان",
                "کرج",
                "اصفهان",
                "شیراز",
                "اهواز",
                "مشهد",
                "یزد",
                "ساری",
              ]}
              state={city}
              setState={setCity}
            />
          </div>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>ودیعه</p>
          <input className="col-10"
            type="text"
            placeholder="0 - 30,000,000,000 تومان"
            onChange={adDiposit}
            value={diposit}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>مناسب برای</p>
          <div className="submitinfo_dropdowns col-12">
            {" "}
            <DropDown
              title="خانواده - مجرد"
              items={["خانواده", "مجرد"]}
              state={monaseb}
              setState={setMonaseb}
            />
          </div>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>محدوده آگهی</p>
          <div className="submitinfo_dropdowns col-10">
            {" "}
            <DropDown
              title="محدوده آگهی را انتخاب کنید."
              items={["الهیه", "فرمانیه","شهرک غرب","شهران","پاسداران" ,"نارمک","رسالت"]}
              state={range}
              setState={setRange}
            />
          </div>
        
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>اجاره</p>
          <input className="col-10"
            type="text"
            placeholder="0 - 150,000,000 تومان"
            onChange={adRent}
            value={rent}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>تعداد اتاق</p>
          <input className="col-12"
            type="text"
            placeholder="1،2،3،..."
            style={{ direction: "ltr" }}
            onChange={adRoom}
            value={room}
          ></input>
        </div>
        <div className="submitinfo_map_div col-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1618.9307273885154!2d51.51245399335608!3d35.75420990915773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1697630592755!5m2!1sen!2s"
            width="550"
            height="200"
            style={{ border: "0px" }}
            loading="lazy"
            allowFullScreen
            className="submitinfo_map col-11 "
          ></iframe>
          <div className="submitinfo_map_texts col-11">
            <p style={{ fontSize: "16px", fontWeight: "400px" }}>
              عکس های آگهی
            </p>
            <p>عکس‌هایی از فضای داخل و بیرون ملک اضافه کنید.</p>
          </div>
          <div className="submitinfo_map_pics col-10">
            <div className="submitinfo_map_pics_div col-122">
              {" "}
              <input className="col-12"
                type="file"
                name="file"
                id="picfile"
                onChange={handleFileChange}
              ></input>
              <div className="submitinfo_imgbg">
                <Image
                  alt=""
                  width={30}
                  height={30}
                  src={"/image/aaa.svg"}
                ></Image>
              </div>
            </div>
            <div className="submitinfo_map_pics_div col-122">
              <input type="file" name="file" className="col-12" ></input>
              <div className="submitinfo_imgbg">
                <Image
                  alt=""
                  width={30}
                  height={30}
                  src={"/image/aaa.svg"}
                ></Image>
              </div>
            </div>
            <div className="submitinfo_map_pics_div col-122">
              <input type="file" name="file" className="col-12" ></input>
              <div className="submitinfo_imgbg">
                <Image
                  alt=""
                  width={30}
                  height={30}
                  src={"/image/aaa.svg"}
                ></Image>
              </div>
            </div>
            <div  className="submitinfo_map_pics_div col-122">
              <input type="file" name="file" className="col-12"></input>{" "}
              <div className="submitinfo_imgbg">
                <Image
                  alt=""
                  width={30}
                  height={30}
                  src={"/image/aaa.svg"}
                ></Image>
              </div>
            </div>
            <div className="submitinfo_map_pics_div col-122">
              <input type="file" name="file" className="col-12"></input>{" "}
              <div className="submitinfo_imgbg">
                <Image
                  alt=""
                  width={30}
                  height={30}
                  src={"/image/aaa.svg"}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>طبقه</p>
          <input type="text" placeholder="طبقه اول، دوم، سوم،...."
          className="col-12"
          onChange={adFloor}
          value={floor}></input>
          <p>آسانسور</p>
          <div className="submitinfo_dropdowns col-12">
            {" "}
            <DropDown
              title="در صورت داشتن آسانسور، وارد کنید."
              items={["ندارد", "دارد"]}
              state={elevator}
              setState={setElevator}
            />
          </div>
        
          <p>پارکینگ</p>
          <input className="col-12"
            type="text"
            placeholder="تعداد پارکینگ های ملک خود را وارد کنید."
            onChange={adParking}
            value={parking}
          ></input>
          <p>انباری</p>
          <div className="submitinfo_dropdowns col-12">
            {" "}
            <DropDown
              title="در صورت داشتن انباری، وارد کنید."
              items={["ندارد", "دارد"]}
              state={warehouse}
              setState={setWarehouse}
            />
          </div>
         
        </div>
        <div className="submitinfo_bottom col-12">
          <p>توضیحاتی درباره آگهی</p>
          <input className="col-12" type="text" placeholder="توضیحات را بنویسید."
           onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          ></input>
        </div>
        <button className="submitinfo_btn col-3">ثبت اطلاعات</button>
      </div>
    </div>
    </div>
  );
}
