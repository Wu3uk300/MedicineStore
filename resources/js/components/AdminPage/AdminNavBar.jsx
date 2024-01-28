import React from "react";
import styles from "./AdminPage.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function AdminNavBar(props) {
  const params = useParams();
  function handleChange() {
    console.log(params.create);
  }
  return (
    <div className={styles.navBar}>
      <div className={styles.adminLogo}>
        <p>Kondratov Store Admin Panel</p>
      </div>
      <div className={styles.adminChoose}>
        {params.create === "create" || "view" ? (
          <div className={styles.wholeConstruction}>
            <Link to="/admin" onClick={() => handleChange()}>
              <p
                className={
                  props.checkState === 1 ? styles.active : styles.inActive
                }
                onClick={() => props.setCheckState(1)}
              >
                Items
              </p>
            </Link>
            <Link to="/admin" onClick={() => handleChange()}>
              <p
                className={
                  props.checkState === 2 ? styles.active : styles.inActive
                }
                onClick={() => props.setCheckState(2)}
              >
                Users
              </p>
            </Link>
          </div>
        ) : (
          <div className={styles.wholeConstruction}>
            <p
              className={
                props.checkState === 1 ? styles.active : styles.inActive
              }
              onClick={() => props.setCheckState(1)}
            >
              Items
            </p>

            <p
              className={
                props.checkState === 2 ? styles.active : styles.inActive
              }
              onClick={() => props.setCheckState(2)}
            >
              Users
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
