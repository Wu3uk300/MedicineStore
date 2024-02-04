import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import facebook from "./facebook.png";
import insta from "./insta.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.leftPart}>
        <div className={styles.leftText}>
          <div className={styles.logo}>
            <Link to="/">
              <h2>KONDRATOV</h2>
              <p>PHARMACY STORE</p>
            </Link>
          </div>
          <div className={styles.firstLinks}>
            <a href="#">Medicaton</a>
            <a href="#">Vitamins</a>
            <a href="#">Cosmetics</a>
            <a href="#">Hygiene</a>
            <a href="#">Medical device</a>
            <a href="#">Mom and Baby</a>
            <a href="#">Diet food</a>
            <a href="#">Nursing</a>
            <a href="#">Beauty</a>
          </div>
          <div className={styles.secondLinks}>
            <Link to="/delivery">
              <a href="#">Delievery</a>
            </Link>
            <a href="#">Legal Notice</a>
            <Link to="/about">
              <a href="#">About us</a>
            </Link>

            <a href="#">Secure payment</a>
            <a href="#">Payment</a>
            <a href="#">Location</a>
          </div>
        </div>
      </div>
      <div className={styles.rightPart}>
        <div className={styles.rightText}>
          <a className={styles.phone} href="#">
            (729) 334-51-81
          </a>
          <p className={styles.time}>
            Monday–Friday: 9:00am – 6:00pm <br />
            Saturday–Sunday: 9:00am – 4:00pm
          </p>
          <p className={styles.adress}>
            9207 Lakeshore Rd Shreveport,
            <br /> Rhode Island 98563 <br /> United States
          </p>
          <a className={styles.mail} href="#">
            medilifecompany@example.com
          </a>
          <div className={styles.mediaLinks}>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
            <a href="#">
              <img src={insta} alt="" />
            </a>
            <a href="#">
              <img src={youtube} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
