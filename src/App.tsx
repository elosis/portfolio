import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-container">
      <div className="main-container-inner">
        <svg className="stick-svg-left">
          <line className="stick" x1="0" y1="0" x2="15%" y2="0%" />
          <line className="stick" x1="0" y1="0" x2="0%" y2="100%" />
        </svg>
        <Header />
        <Section />
        <Footer />
        <svg className="stick-svg-right">
          <line className="stick" x1="100%" y1="100%" x2="100%" y2="0%" />
          <line className="stick" x1="100%" y1="100%" x2="85%" y2="100%" />
        </svg>
      </div>
    </div>
  );
}

export default App;
