import React from "react";
import styles from "./Components/AboutUs.module.css";
import NavBar from "./Components/NavBar/NavBar";
import AboutUsContent from "./Components/AboutUsContent";
import Footer from "./Components/Footer/Footer";

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
