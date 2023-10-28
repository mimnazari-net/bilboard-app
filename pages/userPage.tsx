import Userpagefirstpage from "@/components/userpagefirstpage";
import "../styles/userPage.css";
import UserPageBox from "@/components/userPageBox";
import Recentvisits from "@/components/recentvisits";
import Advertisementregistration from "@/components/Advertisementregistration";
import SubmitInfo from "@/components/submitInfo";
export default function UserPage() {
  return (
    <div className="userpage_container col-12">
      <div className="userpage_kol col-10">
        <UserPageBox />
<SubmitInfo />
      </div>
    </div>
  );
}
