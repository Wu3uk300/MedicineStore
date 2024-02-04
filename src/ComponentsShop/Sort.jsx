import React, { useEffect } from "react";
import styles from "./Sort.module.css";
export default function Sort(props) {
  function changeSorting(e) {
    if (e.id === "PriceHigherToLower") {
      const sortedPrices = [...props.list].sort((a, b) => b.price - a.price);
      props.setSortName("Price: Higher to Lower");
      props.setList(sortedPrices);
      props.setDisableCheck(1);
    } else if (e.id === "PriceLowerToHigher") {
      const sortedPrices = [...props.list].sort((a, b) => a.price - b.price);
      props.setSortName("Price: Lower to Higher");
      props.setList(sortedPrices);
      props.setDisableCheck(2);
    } else if (e.id === "Rating") {
      const sortedRating = [...props.list].sort(
        (a, b) => parseInt(b.rate[0]) - parseInt(a.rate[0])
      );
      props.setSortName("Rating: Higher to Lower");
      props.setList(sortedRating);
      props.setDisableCheck(3);
    }
  }
  useEffect(() => {
    let sortedList = [...props.list];
    let sortName = props.sortName;
    let disableCheck = props.disableCheck;

    if (disableCheck === 1) {
      sortedList = sortedList.sort((a, b) => b.price - a.price);
      sortName = "Price: Higher to Lower";
    } else if (disableCheck === 2) {
      sortedList = sortedList.sort((a, b) => a.price - b.price);
      sortName = "Price: Lower to Higher";
    } else if (disableCheck === 3) {
      sortedList = sortedList.sort(
        (a, b) => parseInt(b.rate[0]) - parseInt(a.rate[0])
      );
      sortName = "Rating: Higher to Lower";
    }

    if (
      JSON.stringify(sortedList) !== JSON.stringify(props.list) ||
      sortName !== props.sortName ||
      disableCheck !== props.disableCheck
    ) {
      props.setList(sortedList);
      props.setSortName(sortName);
      props.setDisableCheck(disableCheck);
    }
  }, [props.list, props.sortName, props.disableCheck]);

  return (
    <div className={styles.main}>
      <h2>Shop</h2>
      <div className={styles.sortingSection}>
        <div className={styles.sortShowAll}>
          <p className={styles.sortText}>Sort by:</p>
          <p className={styles.sortShow}>{props.sortName}</p>
        </div>

        <div className={styles.sortButtons}>
          <button
            onClick={(e) => changeSorting(e.target)}
            id="PriceHigherToLower"
            className={styles.sortBtn}
            disabled={props.disableCheck === 1 ? true : false}
          >
            Price: Higher to Lower
          </button>
          <button
            disabled={props.disableCheck === 2 ? true : false}
            onClick={(e) => changeSorting(e.target)}
            id="PriceLowerToHigher"
            className={styles.sortBtn}
          >
            Price: Lower to Higer
          </button>
          <button
            disabled={props.disableCheck === 3 ? true : false}
            onClick={(e) => changeSorting(e.target)}
            id="Rating"
            className={styles.sortBtn}
          >
            Rating
          </button>
        </div>
      </div>
    </div>
  );
}
