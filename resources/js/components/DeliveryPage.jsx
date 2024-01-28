import React from "react";
import styles from "./Components/DeliveryPage.module.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import DeliveryPageContent from "./Components/DeliveryPageContent.jsx";
import Footer from "./Components/Footer/Footer.jsx";

export default function DeliveryPage() {
  return (
    <div>
      <div className={styles.container}>
        <NavBar />
        <DeliveryPageContent />
      </div>
      <Footer />
    </div>
  );
}
