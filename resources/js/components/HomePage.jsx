import React from "react";
import NavBar from "./Components/NavBar/NavBar.jsx";
import MainPage from "./Components/MainPage/MainPage.jsx";
import CarouselList from "./Components/Carousel/CarouselList.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import InfoBlock from "./Components/InfoBlock/InfoBlock.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import styles from "./Components/homepage.module.css";
function HomePage(props) {
  const name1 = "selector1";
  const name2 = "selector2";
  const id1 = {
    All: "All",
    Antibiotics: "Antibiotics",
    Cough: "Cough",
    Digestion: "Digestion",
    Painkillers: "Painkillers",
  };
  const id2 = {
    All: "All2",
    Antibiotics: "Antibiotics2",
    Cough: "Cough2",
    Digestion: "Digestion2",
    Painkillers: "Painkillers2",
  };
  return (
    <div>
      <div className={styles.container}>
        <NavBar />
        <MainPage state={props.state} setState={props.setState} />
        <CarouselList name={name1} id={id1} />
        <Contact />
        <CarouselList name={name2} id={id2} />

        <InfoBlock />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
