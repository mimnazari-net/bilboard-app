import "../styles/mojtama.css";
import Image from "next/image";
export default function Mojtama() {
  const backgrounds = [
    {
      cover: "/image/Ellipse11.png",
      image: "/image/yyyyyy1.png",
      value: "ویلا",
    },
    {
      cover: "/image/Ellipse10.png",
      image: "/image/Untitled-1.png",
      value: "آپارتمان",
    },
    {
      cover: "/image/Ellipse11.png",
      image: "/image/ideicekfejl1.png",
      value: "مجتمع تجاری",
    },
    {
      cover: "/image/Ellipse10.png",
      image: "/image/kckkj1.png",
      value: "آپارتمان شخصی",
    },
    {
      cover: "/image/Ellipse11.png",
      image: "/image/vertical-shot-white-building-clear-sky2.png",
      value: "مجتمع اداری",
    },
  ];
  return (
    <div className="homeGroup_container col-12">
      <div className="homeGroup_up_side">
        <h1>با جستجو و ذخیره خانه مورد نظر خود،</h1>
        <p>
          ما چندین پیشنهاد ویژه که مناسب سلیقه تان می باشد را برایتان نمایش می
          دهیم.
        </p>
      </div>
      <div className="homeGroup_pics">
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
                height={index === 0 ? 250 : 300}
                width={220}
              />
            </div>
            <p className="homeGroup_name">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
