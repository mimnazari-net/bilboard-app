import "../../styles/homeDropBox.css";

import Select from "react-select";

export default function HomeDropBox() {
  //data 
  const citiesOptions = [
    { value: "tehran", label: "تهران" },
    { value: "damavand", label: "دماوند" },
    { value: "tajrish", label: "تجریش" },
    { value: "rey", label: "شهر ری" },
    { value: "adbali", label: "آبعلی" },
    { value: "pardis", label: "پردیس" },
    { value: "andishe", label: "اندیشه" },
    { value: "robat-karim", label: "رباط کریم" },
  ];

  const districtOptions = [
    { value: "pasdaran", label: "پاسداران" },
    { value: "narmak", label: "نارمک" },
    { value: "shahran", label: "شهران" },
    { value: "farmanie", label: "فرمانیه" },
    { value: "aghdasie", label: "اقدسیه" },
    { value: "shosh", label: "شوش" },
    { value: "tehransar", label: "تهرانسر" },
    { value: "khazane", label: "خزانه" },
  ];

  const meterageOptions = [
    { value: "70", label: "70" },
    { value: "80", label: "80" },
    { value: "90", label: "90" },
    { value: "100", label: "100" },
    { value: "150", label: "150" },
    { value: "200", label: "200" },
    { value: "250", label: "250" },
    { value: "300", label: "300" },
  ];

  const priceOptions = [
    { value: "400", label: "400 میلیون" },
    { value: "500", label: "500 میلیون" },
    { value: "700", label: "700 میلیون" },
    { value: "800", label: "800 میلیون" },
    { value: "1", label: "1 میلیارد" },
    { value: "1.5", label: "1.5 میلیارد" },
    { value: "2", label: "2 میلیارد" },
    { value: "3", label: "3 میلیارد" },
  ];

  return (
    <div className="HomeDropBox_continer col-10 ">
      <div className="HomeDropBox_continer_item">
        <Select
          className="HomeDropBox_item"
          placeholder="شهر"
          options={citiesOptions}
        />
        <hr />
      </div>
      <div className="HomeDropBox_continer_item">
        <Select
          className="HomeDropBox_item"
          placeholder="منطقه"
          options={districtOptions}
        />
        <hr />
      </div>
      <div className="HomeDropBox_continer_item">
        <Select
          className="HomeDropBox_item"
          placeholder="متراژ"
          options={meterageOptions}
        />
        <hr />
      </div>
      <div className="HomeDropBox_continer_item">
        <Select
          className="HomeDropBox_item"
          placeholder="قیمت"
          options={priceOptions}
        />
        <hr />
      </div>
    </div>
  );
}
