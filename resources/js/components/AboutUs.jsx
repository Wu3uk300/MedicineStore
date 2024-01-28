import React from "react";
import styles from "./Components/AboutUs.module.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import AboutUsContent from "./Components/AboutUsContent.jsx";
import Footer from "./Components/Footer/Footer.jsx";

export default function AboutUs() {
  return (
    <div>
      <div className={styles.container}>
        <NavBar />
        <AboutUsContent />
      </div>
      <Footer />
    </div>
  );
}
