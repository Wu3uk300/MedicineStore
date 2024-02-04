import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import ShopList from "./ComponentsShop/ShopList";
import Footer from "./Components/Footer/Footer";
import styles from "./ComponentsShop/ShopList.module.css";

export default function ShopPage(props) {
  return (
    <div>
      <div className={styles.container}>
        <NavBar />
        <ShopList state={props.state} setState={props.setState} />
      </div>

      <Footer />
    </div>
  );
}
