"use client";
// import link
import Link from "next/link";
// import css
import "../../../styles/vertificationCode.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Alert from "@mui/material/Alert";

export default function VertificationCode() {
  const [digit1, setDigit1] = useState<string>("");
  const [digit2, setDigit2] = useState<string>("");
  const [digit3, setDigit3] = useState<string>("");
  const [digit4, setDigit4] = useState<string>("");

  const [showCodeAlert, setshowCodeAlert] = useState(false);

  const handleCloseCodeAlert = () => {
    setshowCodeAlert(false);
  };

  const router = useRouter();

  type InputEvent = React.ChangeEvent<HTMLInputElement>;

  const handleChangeDigit1 = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDigit1(e.target.value);
    }
  };
  const handleChangeDigit2 = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDigit2(e.target.value);
    }
  };
  const handleChangeDigit3 = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDigit3(e.target.value);
    }
  };
  const handleChangeDigit4 = (e: InputEvent) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setDigit4(e.target.value);
    }
  };

  return (
    <div className="vertificationCode_container ">
      <div className="vertificationCode_right_side ">
        {showCodeAlert && (
          <Alert
            severity="error"
            onClose={handleCloseCodeAlert}
            style={{ marginBottom: "10px" }}
          >
            کد 4 رقمی ارسال شده را وارد نمایید
          </Alert>
        )}
        <div className="vertificationCode_right_content ">
          <p>کد تایید را وارد نمایید.</p>
          <div className="vertificationCode_right_inputs ">
            <input
              value={digit1}
              onChange={handleChangeDigit1}
              maxLength={1}
              type="text"
              placeholder="4"
            />
            <input
              value={digit2}
              onChange={handleChangeDigit2}
              maxLength={1}
              type="text"
              placeholder="3"
            />
            <input
              value={digit3}
              onChange={handleChangeDigit3}
              maxLength={1}
              type="text"
              placeholder="2"
            />
            <input
              value={digit4}
              onChange={handleChangeDigit4}
              maxLength={1}
              type="text"
              placeholder="1"
            />
          </div>

          <button 
          className="vertificationCode_btn "
            onClick={() => {
              if (
                digit1 !== "" &&
                digit2 !== "" &&
                digit3 !== "" &&
                digit4 !== ""
              )
                router.replace("/pages/dashboard");
              else setshowCodeAlert(true);
            }}
            
          >
            ورود
          </button>
        </div>
      </div>
      <div className="vertificationCode_left_side "></div>
    </div>
  );
}
