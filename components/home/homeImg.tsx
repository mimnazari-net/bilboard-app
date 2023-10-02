//import image
import Image from "next/image";

export default function HomeImage() {
  return (
    <div>
      <Image src={"/image/home-img.png"} width={403} height={556} alt="" />
    </div>
  );
}
