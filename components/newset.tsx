// import css
import "../styles/newest.css";
// import image
import Image from "next/image";

export default function Newest() {
  // data
  return (
    <div className="newest_container">
      <h1>تازه ترین آپارتمان های مسکونی</h1>

      <Image
        width={1700}
        height={238}
        alt="jghd"
        src={"/image/image2.png.jpeg"}
      ></Image>
    </div>
  );
}
