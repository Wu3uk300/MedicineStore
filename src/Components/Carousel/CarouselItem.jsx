import React from "react";
import styles from "./CarouselItem.module.css";
import { Link } from "react-router-dom";

export default function CarouselItem(props) {
  return (
    <div className={styles.item}>
      <div className={styles.itemCover}>
        <div className={styles.medPic}>
          <img src={props.data.pic} alt="" />
        </div>
        <div className={styles.medText}>
          <p className={styles.rate}>{props.data.rate}</p>
          <Link to={`/item/${props.data.id}`}>
            <a href="#" className={styles.name}>
              {props.data.name}
            </a>
          </Link>
          <p className={styles.price}>{props.data.price}</p>
          <p className={styles.description}>{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
