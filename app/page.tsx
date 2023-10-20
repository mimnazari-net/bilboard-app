import "./globals.css";
import Footer from "./components/footer";

import Navbar from "@/app/components/navbar";
import HomeSection from "./components/homeSection";
import HomeGroups from "./components/HomeGroups";
import HousesSection from "./components/housesSection";
import Consultants from "./components/consultants";


export default function Home() {

  return (
    <div>
      <Navbar />
      <HomeSection/>
      <HomeGroups/>
      <HousesSection/>
      <Consultants />
      <Footer />
    </div>
  );
}
