import React from "react"
import './App.scss';
import Wave from "./assets/wave.svg";

import Header from "./components/Header.js";
import Section1 from "./sections/section1.js";
import Section2 from "./sections/section2.js";
import Section3 from "./sections/section3.js";

function App() {
  return (
    <div className="main">
      <Header>
      </Header>
      <div className="wave fixed z-0">
        <img src={Wave} alt="wave-1" />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
