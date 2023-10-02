import "./globals.css";
import Footer from "@/components/footer";
import Register from "@/pages/register";
import VertificationCode from "@/pages/vertificationCode";
import HouseCrad from "@/components/houseCard";
import HomeBox from "@/components/home/homeBox";
import HomePage from "@/pages/homePage";
import HousesPage from "@/pages/housesPage";

export default function Home() {
  return (
    <main>
      
      <HomePage />
       <HousesPage />
      
      <Footer /> 
    </main>
  );
}
