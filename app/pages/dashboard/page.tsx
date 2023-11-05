import Userpagefirstpage from "@/app/components/userpagefirstpage";
import "../../../styles/userPage.css";
import UserPageBox from "@/app/components/userPageBox";
import Recentvisits from "@/app/components/recentvisits";
import Advertisementregistration from "@/app/components/Advertisementregistration";
import SubmitInfo from "@/app/components/submitInfo";
import Moshaverin from "@/app/components/moshaverin";
export default function UserPage() {
  return (
    <div className="userpage_container ">
      <div className="userpage_kol">
        <UserPageBox />
      {/* <Advertisementregistration/> */}
      {/* <Userpagefirstpage /> */}
      <SubmitInfo/>
      </div>
    </div>
  );
}
