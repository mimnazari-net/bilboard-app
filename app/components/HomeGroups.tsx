// import css
import "../../styles/homeGroups.css";
//import image
import Image from "next/image";

export default function HomeGroups() {

  //data
  const backgrounds = [
    {
      cover: "/image/GroupingHouse/orangeCircle.png",
      image: "/image/GroupingHouse/vila.png",
      value: "ویلا",
    },
    {
      cover: "/image/GroupingHouse/blueCircle.png",
      image: "/image/GroupingHouse/aparteman.png",
      value: "آپارتمان",
    },
    {
      cover: "/image/GroupingHouse/orangeCircle.png",
      image: "/image/GroupingHouse/tejari.png",
      value: "مجتمع تجاری",
    },
    {
      cover: "/image/GroupingHouse/blueCircle.png",
      image: "/image/GroupingHouse/shakhsi.png",
      value: "آپارتمان شخصی",
    },
    {
      cover: "/image/GroupingHouse/orangeCircle.png",
      image: "/image/GroupingHouse/edari.png",
      value: "مجتمع اداری",
    },
  ];
  return (
    <div className="homeGroup_container col-12">
      <div className="homeGroup_up_side col-10">
        <h1>با جستجو و ذخیره خانه مورد نظر خود،</h1>
        <p>
          ما چندین پیشنهاد ویژه که مناسب سلیقه تان می باشد را برایتان نمایش می
          دهیم.
        </p>
      </div>
      <div className="homeGroup_pics col-10">
        {backgrounds.map((item, index) => (
          <div className="homeGroup_item">
            <div
              className="homeGroup_pic_container"
              style={{ backgroundImage: `url(${item.cover})` }}
              key={index}
            >
              <Image
                src={item.image}
                alt="asicj"
                height={index === 0 ? 200 : 250}
                width={180}
              />
            </div>
            <p className="homeGroup_name">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
