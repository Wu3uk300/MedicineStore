import React from "react";
import AdminNavBar from "./AdminNavBar";
import styles from "./AdminPage.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function AdminCreate(props) {
  const params = useParams();
  const [getTitle, setGetTitle] = useState();
  const [getPrice, setGetPrice] = useState();
  const [getStatus, setGetStatus] = useState();
  function createItem() {
    axios
      .get("/create-item", {
        params: {
          title: getTitle,
          price: getPrice,
          status: getStatus,
        },
      })
      .then((response) => {
        alert("Item was created");
      })
      .catch((err) => console.log(err));
  }
  return (
    <div>
      {params.create === "create" ? (
        <div>
          <AdminNavBar
            checkState={props.checkState}
            setCheckState={props.setCheckState}
          />
          <div className={styles.createContainer}>
            <div className={styles.createFirst}>
              <p>New Item</p>
              <button onClick={() => createItem()}>Save</button>
            </div>
            <div className={styles.createSecond}>
              <div className={styles.createField}>
                <p>Title</p>
                <input
                  value={getTitle}
                  onChange={(e) => setGetTitle(e.target.value)}
                  type="text"
                  placeholder="Title"
                />
              </div>

              <div className={styles.createField}>
                <p>Price</p>
                <input
                  value={getPrice}
                  onChange={(e) => setGetPrice(e.target.value)}
                  type="number"
                  placeholder="Price"
                />
              </div>

              <div className={styles.selectField}>
                <label for="status">Status</label>
                <select
                  onChange={(e) => setGetStatus(e.target.value)}
                  id="status"
                  name="statuslist"
                  form="availability"
                >
                  <option value="1">Available</option>
                  <option value="0">Not Available</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <AdminNavBar
            checkState={props.checkState}
            setCheckState={props.setCheckState}
          />
          <div className={styles.createContainer}>
            <div className={styles.createFirst}>
              <p>Change Item</p>
              <button>Delete</button>
              <button>Save</button>
            </div>
            <div className={styles.createSecond}>
              <div className={styles.createField}>
                <p>Title</p>
                <input type="text" placeholder="Title" />
              </div>

              <div className={styles.createField}>
                <p>Price</p>
                <input type="number" placeholder="Price" />
              </div>

              <div className={styles.selectField}>
                <label for="status">Status</label>
                <select id="status" name="statuslist" form="availability">
                  <option value="available">Available</option>
                  <option value="notAvailable">Not Available</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
