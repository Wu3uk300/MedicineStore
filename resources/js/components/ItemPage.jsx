import React from "react";
import ItemPageMain from "./ComponentsItemPage/ItemPageMain.jsx";
import styles from '../components/ItemPage.module.css'
import Navbar from "./Components/NavBar/NavBar.jsx";
import CarouselList from "./Components/Carousel/CarouselList.jsx";
import Footer from "./Components/Footer/Footer.jsx";
const name = "selector3";
const id = {
  All: "All",
  Antibiotics: "Antibiotics",
  Cough: "Cough",
  Digestion: "Digestion",
  Painkillers: "Painkillers",
};

export default function ItemPage() {
  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <ItemPageMain />
        <CarouselList name={name} id={id} />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
