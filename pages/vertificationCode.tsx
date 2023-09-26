import "../styles/vertificationCode.css";
export default function VertificationCode() {
  return (
    <div className="vertificationCode_container col-12">
      <div className="vertificationCode_right_side col-6">
        <div className="vertificationCode_right_content col-5">
          <p>کد تایید را وارد نمایید.</p>

          <div className="ertificationCode_right_inputs ">
            <input maxLength={1} type="text" placeholder="4" />
            <input maxLength={1} type="text" placeholder="3" />
            <input maxLength={1} type="text" placeholder="2" />
            <input maxLength={1} type="text" placeholder="1" />
          </div>

          <button>ورود</button>
        </div>
      </div>
      <div className="vertificationCode_left_side col-6"></div>
    </div>
  );
}
