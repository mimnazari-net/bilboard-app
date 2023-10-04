import Image from "next/image";
import "../styles/register.css";
import { FaRegUser } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";

export default function Register() {
  return (
    <div className="register_container col-12">
        {/* قسمت سمت راست */}
      <div className="register_right_side col-5">
        <div className="register_right_side_container col-6">
          <p className="register_right_side_title">خوش آمدید!</p>

          <div className="register_right_side_inputs">
            <div className="register_right_side_inputs_i">
              <FaRegUser />
            </div>
            <input className="col-12" placeholder="نام و نام خانوادگی" />
          </div>

          <div className="register_right_side_inputs">
            <div className="register_right_side_inputs_i2">
              <AiOutlinePhone />
            </div>
            <input className="col-12" placeholder="شماره تماس" />
          </div>

          <div className="register_ruls">
            <input type="checkbox" />
            <p>تمامی ضوابط و قوانین را می پذیرم.</p>
          </div>
          <button >دریافت کد تایید</button>
        </div>
      </div>
      {/* قسمت سمت چپ */}
      <div className="register_left_side col-7">
       
      </div>
    </div>
  );
}
