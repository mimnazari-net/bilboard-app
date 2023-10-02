import "./globals.css";
import Footer from "@/components/footer";
import Register from "@/pages/register";
import VertificationCode from "@/pages/vertificationCode";
import HouseCrad from "@/components/houseCard";
import HomeBox from "@/components/home/homeBox";
import HomePage from "@/pages/homePage";

export default function Home() {
  return (
    <main>
      
      <HomePage />
       <HouseCrad />
      
      <Footer /> 
    </main>
  );
}
