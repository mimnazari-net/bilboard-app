import "./globals.css";
import Footer from "@/components/footer";
import Register from "@/pages/registerPage";
import VertificationCode from "@/pages/vertificationCodePage";
import HouseCrad from "@/components/homeCard";
import HomeBox from "@/components/homeBox";
import HomePage from "@/pages/homePage";
import HousesPage from "@/pages/housesPage";

export default function Home() {
  return (
    <div>
      <HomePage />
      <HousesPage />
      <Footer />
    </div>
  );
}
