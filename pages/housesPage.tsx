import '../styles/housesPage.css'

import HouseCrad from "@/components/houseCard";

export default function HousesPage (){
    return(
        <div className="houses_container">
            <div className="houses_navbar">
                <p>پر بازدید ترین های املاک</p>
                <div className="houses_navbar_left_side">
                    <div className="houses_navbar_left_text">
                        <p>آپارتمان</p>
                        <p>ویلا</p>
                        <p>تجاری</p>
                        <p>باغ</p>
                        <p>کلنگی</p>
                        <p>زمین</p>
                    </div>
                    <hr/>
                </div>
            </div>
            <div className="houses_cards">
                <HouseCrad/>
            </div>
        </div>
    );
}