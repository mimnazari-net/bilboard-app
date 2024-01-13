import Footer from "../..//components/footer";
import Moshaverin from "../..//components/moshaverin";
import Navbar from "../../components/navbar";
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
