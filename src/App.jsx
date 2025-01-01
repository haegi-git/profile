import React, { useEffect } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.css";

const App = () => {
  useEffect(() => {
    new fullpage("#fullpage", {
      autoScrolling: true,
      scrollHorizontally: false,
      navigation: true, // 네비게이션 추가
      navigationPosition: "left",
    });
  }, []);

  return (
    <div id="fullpage">
      <div className="section" style={{ background: "#ff5f45", height: "100vh" }}>
        <h1>Section 1</h1>
      </div>
      <div className="section" style={{ background: "#0798ec", height: "100vh" }}>
        <h1>Section 2</h1>
      </div>
      <div className="section" style={{ background: "#fc6c7c", height: "100vh" }}>
        <h1>Section 3</h1>
      </div>
    </div>
  );
};

export default App;
