import Userpagefirstpage from "@/app/components/userpagefirstpage";
import "../../../styles/userPage.css";
import UserPageBox from "@/app/components/userPageBox";

export default function UserPage() {
  return (
    <div className="userpage_container ">
      <div className="userpage_kol">
        <UserPageBox />
        <Userpagefirstpage />
      </div>
    </div>
  );
}
