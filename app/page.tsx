import "./globals.css";
import Footer from "@/components/footer";
import HomePage from "@/pages/homePage";
import HousesPage from "@/pages/housesPage";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <HomePage />
      <HousesPage />
      <Footer />
    </div>
  );
}
