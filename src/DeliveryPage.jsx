import React from "react";
import styles from "./Components/DeliveryPage.module.css";
import NavBar from "./Components/NavBar/NavBar";
import DeliveryPageContent from "./Components/DeliveryPageContent";
import Footer from "./Components/Footer/Footer";

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
