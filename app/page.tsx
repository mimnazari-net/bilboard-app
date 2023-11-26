"use client";
import "./globals.css";
import Footer from "./components/footer";
import HomeSection from "./components/homeSection";
import HomeGroups from "./components/HomeGroups";
import HousesSection from "./components/housesSection";
import Consultants from "./components/consultants";
import Newest from "./components/newset";

export default function Home() {
  return (
    <main>
      <div className="container">
        <HomeSection />
        <HomeGroups />
        <HousesSection />
        <Newest />
        <Consultants />
        <Footer />
      </div>
    </main>
  );
}
