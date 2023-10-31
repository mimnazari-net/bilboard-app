import Navbar from "../../components/navbar";
import CategoryNavbar from "../../components/categoryNavbar";
import SearchSection from "../../components/searchsection";
import Footer from "../../components/footer";
import AdvertisingSection from "../../components/advertisingSection";

export default function SearchPage() {
  return (
    <div>
      <Navbar />
      <AdvertisingSection />
      <SearchSection />
      <Footer />
    </div>
  );
}