import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";
import NavMenu from "./Components/Nav.jsx";
import Info from "./Components/Info.jsx";
import TopNav from "./Components/TopNav.jsx";
import SkillInfo from "./Components/SkillInfo.jsx";

const App = () => {
    useEffect(() => {
        new fullpage("#fullpage", {
            autoScrolling: true,
            scrollHorizontally: false,
            navigation: false, // 기본 네비게이션(점)을 숨김
            menu: "#menu", // 사용자 정의 메뉴와 연결
            anchors: ["section1", "section2", "section3"], // 섹션 앵커 설정
        });
    }, []);

    return (
        <>
            {/* 사용자 정의 메뉴 */}
            <TopNav/>
            <NavMenu/>

            {/* Fullpage 섹션 */}
            <div id="fullpage" style={{marginLeft: '90px'}}>
                <div className="section" style={{ background: "#f7f9fc", height: "100vh" }}>
                    <Info/>
                </div>
                <div className="section" style={{ background: "#0798ec", height: "100vh" }}>
                    <SkillInfo/>
                </div>
                <div className="section" style={{ background: "#fc6c7c", height: "100vh" }}>
                    <h1>Section 3</h1>
                </div>
            </div>
        </>
    );
};

export default App;
