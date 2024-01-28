import React from "react";
import styles from "./InfoBlock.module.css";
import box from "./box.png";
import pig from "./pig.png";

export default function InfoBlock() {
  return (
    <div className={styles.infoblock}>
      <div className={styles.leftPart}>
        <div className={styles.leftText}>
          <h2>Free Shipping</h2>
          <p>
            We offer free shipping on orders over $35 and hassle free 90- <br />
            day returns so that you can get back to what is most <br />{" "}
            important.
          </p>
        </div>
        <div className={styles.leftPic}>
          <img src={box} alt="" />
        </div>
      </div>
      <div className={styles.rightPart}>
        <div className={styles.rightText}>
          <h2>Save Money</h2>
          <p>
            Discover the lowest prices on thousands of top brands only <br />{" "}
            available at Vitabox.com. Plus, save even more with weekly <br />{" "}
            specials!
          </p>
        </div>
        <div className={styles.rightPic}>
          <img src={pig} alt="" />
        </div>
      </div>
    </div>
  );
}
