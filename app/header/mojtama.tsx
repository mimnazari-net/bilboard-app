import "../styles/mojtama.css";
import Image from "next/image";
export default function Mojtama() {
  const backgrounds = [
    {
      image: (
        <Image
          alt="vila"
          width={250}
          height={249}
          src={"/image/Ellipse 11.png"}
        ></Image>
      ),
    cover:(
        <Image
        alt="vila"
        width={200}
        height={220}
        src={"/image/yyyyyy 1.png"}></Image>
    ),
    value:"ویلا"
    },
    {
      image: (
        <Image
          alt="apartman"
          width={250}
          height={249}
          src={"/image/Ellipse 10.png"}
        ></Image>
      ),
      cover:(
        <Image
        alt="apartman"
        width={164}
        height={270}
        src={"/image/Untitled-1.png"}></Image>
    ),  value:"آپارتمان"
    },
    {
      image: (
        <Image
          alt="tejari"
          width={250}
          height={249}
          src={"/image/Ellipse 11.png"}
        ></Image>
      ),   cover:(
        <Image
        alt="tejari"
        width={180}
        height={250}
        src={"/image/ideicekfejl 1.png"}></Image>
    ),  value:"مجتمع تجاری"
    },
    {
      image: (
        <Image
          alt="shakhsi"
          width={250}
          height={249}
          src={"/image/Ellipse 10.png"}
        ></Image>
      ),   cover:(
        <Image
        alt="shakhsi"
        width={180}
        height={270}
        src={"/image/kckkj 1.png"}></Image>
    ),  value:"آپارتمان شخصی"
    },
    {
      image: (
        <Image
          alt="edari"
          width={250}
          height={249}
          src={"/image/Ellipse 11.png"}
        ></Image>
      ),   cover:(
        <Image
        alt="edari"
        width={170}
        height={235}
        src={"/image/vertical-shot-white-building-clear-sky 2.png"}></Image>
    ),  value:"مجتمع اداری"
    },
  ];
  return (
    <div>
      <div className="upside">
        <h1 className="upside-h">با جستجو و ذخیره خانه مورد نظر خود،</h1>
        <p className="upside-p">
          ما چندین پیشنهاد ویژه که مناسب سلیقه تان می باشد را برایتان نمایش می
          دهیم.
        </p>
      </div>
      <div className="home-pics">
        {backgrounds.map((item,index)=>(<div>
            <div className="bgpics" key={index}>
                <div className="image">{item.image}</div>
                <div className="cover">{item.cover}</div>
            </div>
            <p className="value">{item.value}</p>
            </div>
        ))}
      </div>
    </div>
  );
}
