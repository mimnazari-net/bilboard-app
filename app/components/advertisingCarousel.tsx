import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import Carousel from "nuka-carousel";
import Image from "next/image";
import "../../styles/advertisingCarousel.css";

export default function AdvertisingCarousel() {
  const params = {
    wrapAround: true,
    autoplay: true,
   
  };
  return (
    <div className="AdvertisingCarosel_container col-12">
      <Carousel {...params}>
        <div className="AdvertisingCarosel_item col-3">
          <Image alt="" width={265} height={150} src={"/image/forushx1.png"} />
          <div className="advertising_down_item col-10">
            <h4>آپارتمان 315 متری قیطریه</h4>
            <div className="advertising_down_item_loc col-5">
              <HiOutlineLocationMarker />
              <p>بلوار اندرزگو</p>
            </div>
            <div>35,000,000 تومان</div>
          </div>
        </div>

        <div className="col-3">
          <Image alt="" width={265} height={150} src={"/image/forushx1.png"} />
          <div className="advertising_down_item col-10">
            <h4>آپارتمان 315 متری قیطریه</h4>
            <div className="advertising_down_item_loc col-5">
              <HiOutlineLocationMarker />
              <p>بلوار اندرزگو</p>
            </div>
            <div>35,000,000 تومان</div>
          </div>
        </div>

        <div className="col-3">
          <Image alt="" width={265} height={150} src={"/image/forushx1.png"} />
          <div className="advertising_down_item col-10">
            <h4>آپارتمان 315 متری قیطریه</h4>
            <div className="advertising_down_item_loc col-5">
              <HiOutlineLocationMarker />
              <p>بلوار اندرزگو</p>
            </div>
            <div>35,000,000 تومان</div>
          </div>
        </div>
      </Carousel>

      {/* <button
        onClick={() => swiper.slideNext()}
        className="advertising_carosel_btn_next col-2">
        <HiArrowRight />
      </button>
      <button
        onClick={() => swiper.slidePrev()}
        className="advertising_carosel_btn_next col-2">
        <HiArrowLeft />
      </button> */}
    </div>
  );
}
