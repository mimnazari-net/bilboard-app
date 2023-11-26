import Footer from "@/app/components/footer";
import Moshaverin from "@/app/components/moshaverin";
import Navbar from "@/app/components/navbar";
import "../../../styles/consultantPage.css"
export default function MoshaverinPage() {
  return (
    <div
      className="MoshaverinPage_container"
    >
      <Navbar />
      <Moshaverin />
      <Footer /> 
    </div>
  );
}
