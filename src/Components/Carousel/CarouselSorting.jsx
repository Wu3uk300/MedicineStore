import React from "react";
import styles from "./CarouselSorting.module.css";

export default function CarouselSoring(props) {
  return (
    <div>
      <input
        defaultChecked={props.medName === "All" ? props.checkDef : false}
        className={styles.checkInput}
        type="radio"
        id={props.id[props.medName]}
        name={props.name}
      />
      <label
        onClick={(e) => props.sort(e.target)}
        htmlFor={props.id[props.medName]}
      >
        {props.medName}
      </label>
    </div>
  );
}
