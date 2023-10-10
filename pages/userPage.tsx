import Userpagefirstpage from "@/components/userpagefirstpage";
import "../styles/userPage.css";
import UserPageBox from "@/components/userPageBox";
import Recentvisits from "@/components/recentvisits";
export default function UserPage() {
  return (
    <div className="userpage_container ">
      <div className="userpage_kol">
        <UserPageBox />
      <Recentvisits/></div>
    </div>
  );
}
