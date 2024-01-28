import React from "react";
import styles from "./MainPage.module.css";
import ibuprofen from "./ibuprofen_main.png";
import mamababy from "./mothebaby.jpg";
import fak from "./fak.png";
import { Link } from "react-router-dom";

export default function MainPage(props) {
  return (
    <div className={styles.main}>
      <div className={styles.topMain}>
        <div className={styles.leftContent}>
          <div className={styles.textPart}>
            <h2>
              Allergy Relief <br /> Delivered to You
            </h2>
            <p>
              Allergist-curated products customized to relieve your <br />{" "}
              allergy symptoms at half the brand.
            </p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src={ibuprofen} alt="" />
        </div>
      </div>
      <div className={styles.bottomMain}>
        <div className={styles.bottomLeft}>
          <div className={styles.medKids}>
            <div className={styles.medKidsText}>
              Medicines <br />
              for Kids
              <ul>
                <Link onClick={() => props.setState(1)} to="/shop">
                  <li>Baby hygiene</li>
                </Link>
                <a href="#">
                  <li>Diapers</li>
                </a>
                <a href="#">
                  <li>Baby food</li>
                </a>
              </ul>
            </div>
            <div className={styles.mamaPic}>
              <img src={mamababy} alt="" />
            </div>
          </div>
          <div className={styles.fambeauty}>
            <div className={styles.family}>
              <div className={styles.familyText}>
                Family <br /> Planning
                <ul>
                  <a href="#">
                    <li>Contraceptives</li>
                  </a>
                  <a href="#">
                    <li>Pregnancy tests</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className={styles.break}></div>
            <div className={styles.beauty}>
              <div className={styles.beautyText}>
                Beauty
                <ul>
                  <a href="#">
                    <li>Contraceptives</li>
                  </a>
                  <a href="#">
                    <li>Pregnancy tests</li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomRight}>
          <div className={styles.health}>
            <div className={styles.healthText}>
              <p>Health</p>
              <div className={styles.bottomUl}>
                <div className={styles.rightUl}>
                  <ul>
                    <a href="#">
                      <li>Allergy</li>
                    </a>
                    <a href="#">
                      <li>Flu and the common cold</li>
                    </a>
                    <a href="#">
                      <li>Diabetes</li>
                    </a>
                    <a href="#">
                      <li>Pain and temperature</li>
                    </a>
                    <a href="#">
                      <li>Immunity</li>
                    </a>
                  </ul>
                </div>
                <div>
                  <ul>
                    <a href="#">
                      <li>Metabolism</li>
                    </a>
                    <a href="#">
                      <li>Infections and viruses</li>
                    </a>
                    <a href="#">
                      <li>Leather</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.healthPic}>
              <img src={fak} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
