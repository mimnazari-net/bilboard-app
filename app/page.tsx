import "./globals.css";
import Footer from "@/app/components/footer";
import HomePage from "@/pages/homePage";
import HousesPage from "@/pages/housesPage";
import Navbar from "@/app/components/navbar";
import GroupingHouse from "./components/HomeGroups";
import Consultants from "@/app/components/consultants";
import Link from "next/link";
import SearchPage from "@/pages/search";
import CategoryNavbar from "./components/categoryNavbar"
import SellPage from "../pages/sellPage"
import SearchSection from "./components/searchsection";
import Advertising from "./components/advertising";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Advertising />
      <Footer />
    </div>
  );
}
