import "../styles/homePage.css";

//import components
import HomeBox from "@/components/home/homeBox";
import HomeImage from "@/components/home/homeImg";

export default function HomePage() {
  return (
    <div className="home_container col-12">
      <div className="home_container_right_side col-10">
        <div className="home_container_text">
          <h1>خانه دلخواه خود را پیدا کنید!</h1>
          <p>در کمترین زمان و با کمک متخصصین مشاور مجموعه بیلبورد.</p>
        </div>
        <div className="home_container_box">
          <HomeBox />
        </div>
      </div>
      <div className="home_container_left_side col-3">
        {/* <HomeImage /> */}
      </div>
    </div>
  );
}
