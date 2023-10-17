import Userpagefirstpage from "@/app/components/userpagefirstpage";
import "../styles/userPage.css";
import UserPageBox from "@/app/components/userPageBox";
import Recentvisits from "@/app/components/recentvisits";
import Advertisementregistration from "@/app/components/Advertisementregistration";
export default function UserPage() {
  return (
    <div className="userpage_container ">
      <div className="userpage_kol">
        <UserPageBox />
      <Advertisementregistration/>
      </div>
    </div>
  );
}
