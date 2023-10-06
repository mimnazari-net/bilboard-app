import "./globals.css";
import Footer from "@/components/footer";
import HomePage from "@/pages/homePage";
import HousesPage from "@/pages/housesPage";
import Navbar from "@/components/navbar";
import HomeGroups from "@/components/HomeGroups";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage />
      <HomeGroups />
      <HousesPage />
      <Footer />
    </div>
  );
}
