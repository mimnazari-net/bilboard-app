"use client";
import { useState, ChangeEvent } from "react";
import "../styles/submitInfo.css";
import UserPageHeader from "./userPageHeader";
import Image from "next/image";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';


import Select, { SelectChangeEvent } from '@mui/material/Select';
export default function SubmitInfo() {
  const [file, setFile] = useState<any>("");
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  const [input, setInput] = useState<string>("");


  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' 
      ? value.split(',') : value,
    
    );
  };
  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 100,
      },
    },
  };
  const names = [
  'خرید',
  'فروش',
  'اجاره',
  
];
function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
  return (
    <div className="submitinfo_container col-10">
      <div className="col-11">
        <UserPageHeader />
      </div>
      <div className="submitinfo_upside col-12">
        <p>عنوان آگهی</p>
    
        <input
          type="text"
          placeholder="عنوان آگهی خود را بنویسید."
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
      </div>
      <div className="submitinfo_mid col-12">
        <div className="submitinfo_mid_things col-4">
          <p>انتخاب دسته بندی </p>
          
          

          <input
            type="text"
            placeholder="خرید، فروش، اجاره"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>متراژ</p>
 
          <input
            type="text"
            placeholder="0 - 3000 متر"
            style={{ direction: "ltr" }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>قیمت کل</p>
          <input
            type="text"
            placeholder="قیمت کل خانه خود را وارد نمایید."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>انتخاب نوع ملک</p>
          <input
            type="text"
            placeholder="آپارتمان، ویلا، اداری و..."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>سال ساخت</p>
          <input
            type="text"
            placeholder="سال ساخت را وارد کنید."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>قیمت هر متر مربع</p>
          <input
            type="text"
            placeholder="قیمت هر متر ملک خود را وارد کنید."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>شهر</p>

          <input
            type="text"
            placeholder="شهر خود را انتخاب کنید."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>ودیعه</p>
          <input
            type="text"
            placeholder="0 - 30,000,000,000 تومان"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>مناسب برای</p>
          <input
            type="text"
            placeholder="خانواده - مجرد"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>محدوده آگهی</p>
          <input
            type="text"
            placeholder="محدوده آگهی را انتخاب کنید."
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>اجاره</p>
          <input
            type="text"
            placeholder="0 - 150,000,000 تومان"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_mid_things col-4">
          <p>تعداد اتاق</p>
          <input
            type="text"
            placeholder="1،2،3،..."
            style={{ direction: "ltr" }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
        </div>
        <div className="submitinfo_map_div col-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1618.9307273885154!2d51.51245399335608!3d35.75420990915773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1697630592755!5m2!1sen!2s"
            width="550"
            height="200"
            style={{ border: "0px" }}
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
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
            <div>
              {" "}
              <input
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
            <div>
              <input type="file" name="file"></input>
              <div className="submitinfo_imgbg">
                <Image
                  alt=""
                  width={30}
                  height={30}
                  src={"/image/aaa.svg"}
                ></Image>
              </div>
            </div>
            <div>
              <input type="file" name="file"></input>
              <div className="submitinfo_imgbg">
                <Image
                  alt=""
                  width={30}
                  height={30}
                  src={"/image/aaa.svg"}
                ></Image>
              </div>
            </div>
            <div>
              <input type="file" name="file"></input>{" "}
              <div className="submitinfo_imgbg">
                <Image
                  alt=""
                  width={30}
                  height={30}
                  src={"/image/aaa.svg"}
                ></Image>
              </div>
            </div>
            <div>
              <input type="file" name="file"></input>{" "}
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
          <input type="text" placeholder="طبقه اول، دوم، سوم،...."></input>
          <p>آسانسور</p>
          <input
            type="text"
            placeholder="در صورت داشتن آسانسور، وارد کنید."
          ></input>
          <p>پارکینگ</p>
          <input
            type="text"
            placeholder="تعداد پارکینگ های ملک خود را وارد کنید."
          ></input>
          <p>انباری</p>
          <input
            type="text"
            placeholder="در صورت داشتن انباری، وارد نمایید."
          ></input>
        </div>
        <div className="submitinfo_bottom col-12">
          <p>توضیحاتی درباره آگهی</p>
          <input type="text" placeholder="توضیحات را بنویسید."></input>
        </div>
        <button className="submitinfo_btn col-3">ثبت اطلاعات</button>
      </div>
    </div>
  );
}
