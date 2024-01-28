import React from "react";
import styles from "./Contact.module.css";
import doctorpic from "./GroupOfDoctors.png";

export default function Contact() {
  return (
    <div>
      <div className={styles.contact}>
        <div className={styles.leftPart}>
          <div className={styles.leftText}>
            <p className={styles.leftLogo}>
              Online Medical <br /> Advice
            </p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className={styles.leftBtn}>
            <button>CONTACT US</button>
          </div>
        </div>
        <div className={styles.rightPart}>
          <div className={styles.rightText}>
            <h3 className={styles.rightLogo}>
              Stay up to Date on Discounts <br />
              and New Offers
            </h3>
            <p>
              {" "}
              Tempor incididunt ut labore et dolore magna aliqua ut enim <br />{" "}
              ad minim lorem ipsum dolor sit amet.
            </p>
            <div className={styles.inputPart}>
              <input type="text" placeholder="Enter your email" />
              <button>SUBMIT</button>
            </div>
            <span>
              {" "}
              By signing and clicking Submit, you affirm you have read and agree
              to <br /> the Privacy Policy and Terms of Use, and want to receive
              news.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.phoneInfo}>
        <div className={styles.phoneInfoText}>
          <h2>
            Order Medicine Online <br /> and Take Medicine Without Waiting in
            Line
          </h2>
          <a className={styles.phoneNumber} href="#">
            (729) 334-51-81
          </a>
          <p>
            Monday–Friday: 9:00am – 6:00pm <br />
            Saturday: 9:00am – 4:00pm
          </p>
        </div>
        <div className={styles.phoneInfoPic}>
          <img width="850" height="520" src={doctorpic} alt="" />
        </div>
      </div>
    </div>
  );
}
