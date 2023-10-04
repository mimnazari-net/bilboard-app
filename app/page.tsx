import "./globals.css";
import Footer from "@/components/footer";
import Register from "@/pages/registerPage";
import VertificationCode from "@/pages/vertificationCodePage";
import HouseCrad from "@/components/homeCard";
import HomeBox from "@/components/home-modules/homeBox";
import HomePage from "@/pages/homePage";
import HousesPage from "@/pages/housesPage";
import Notfound from "@/app/not-found";
import Navbar from "@/components/navbar";
import GroupingHouse from "../components/HomeGroups";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage />
      <GroupingHouse />
      <Notfound/>
      <HousesPage />
      <Footer />
    </div>
  );
}
