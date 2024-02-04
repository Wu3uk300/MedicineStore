import React from "react";
import styles from "./ItemPageMain.module.css";

export default function ItemItself(props) {
  return (
    <div className={styles.itemItself}>
      <div className={styles.itemPic}>
        <div>
          <img src={props.checked.pic} alt="" />
        </div>
      </div>
      <div className={styles.text}>
        <div className={styles.textWrap}>
          <div className={styles.itemName}>{props.checked.name}</div>
          <div className={styles.itemRating}>Rating: {props.checked.rate}</div>
          <div className={styles.itemPrice}>${props.checked.price}</div>
          <div className={styles.itemDescription}>
            {props.checked.description}
          </div>
          <div className={styles.cartBtn}>
            <div>
              <input
                className={styles.itemInput}
                type="number"
                id="cartnumber"
                name="cartnumber"
                min="0"
              />
            </div>
            <div>
              <button className={styles.itemButton}>ADD TO CART</button>
            </div>
          </div>
          <div className={styles.wishList}>
            <button className={styles.wishBtn}>ADD TO WISHLIST</button>
          </div>
        </div>
      </div>
    </div>
  );
}
