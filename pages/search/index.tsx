import Navbar from "../../app/components/navbar";
import CategoryNavbar from "../../app/components/categoryNavbar";
import SearchSection from "../../app/components/searchsection";
import Footer from "../../app/components/footer";
import SellPage from "../sellPage";

export default function SearchPage() {
  return (
    <div>
      <Navbar />
      <CategoryNavbar />
      <SellPage />
      <SearchSection />
      <Footer />
    </div>
  );
}