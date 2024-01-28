import React, { useState } from "react";
import styles from "./RegisterPage.module.css";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [nameValue, setNameValue] = useState("");
  const [checkName, setCheckName] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [repPasswordValue, setRepPasswordValue] = useState("");
  const [checkRepPasswordValue, setCheckRepPasswordValue] = useState(false);
  function handleProcess() {
    if (nameValue.length <= 2) {
      setCheckName(true);
    }
    if (nameValue.length > 2) {
      setCheckName(false);
    }
    if (passwordValue !== repPasswordValue) {
      setCheckRepPasswordValue(true);
    }
    if (passwordValue === repPasswordValue) {
      setCheckRepPasswordValue(false);
    }
  }
  return (
    <div className={styles.wholepage}>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <Link to="/">
            <div className={styles.loginLogo}>
              KONDRATOV <br /> STORE
            </div>
          </Link>

          <div className={styles.loginSmall}>
            Create a new account <br /> Required fields are marked *
          </div>
          <div className={styles.loginField}>
            <div className={styles.loginUserName}>
              {checkName && (
                <div className={styles.nameErorr}>
                  Your Username Should be more than 2 characters!
                </div>
              )}
              <div className={styles.loginUserNameText}>Username*</div>
              <div className={styles.loginUserNameInput}>
                <input
                  onChange={(e) => setNameValue(e.target.value)}
                  value={nameValue}
                  type="text"
                />
              </div>
            </div>

            <div className={styles.loginEmail}>
              <div className={styles.loginUserNameText}>E-mail*</div>
              <div className={styles.loginUserNameInput}>
                <input type="text" />
              </div>
            </div>

            <div className={styles.loginPassword}>
              <div className={styles.loginPasswordText}>
                <p>Password*</p>
              </div>
              <div className={styles.loginUserNameInput}>
                <input
                  onChange={(e) => setPasswordValue(e.target.value)}
                  value={passwordValue}
                  type="password"
                />
              </div>
            </div>

            <div className={styles.loginPassword}>
              {checkRepPasswordValue && (
                <div className={styles.nameErorr}>Password should match!</div>
              )}
              <div className={styles.loginPasswordText}>
                <p>Password repeat*</p>
              </div>
              <div className={styles.loginUserNameInput}>
                <input
                  onChange={(e) => setRepPasswordValue(e.target.value)}
                  value={repPasswordValue}
                  type="password"
                />
              </div>
            </div>

            <div className={styles.loginButton}>
              <button onClick={() => handleProcess()}>Create account</button>
            </div>
          </div>
          <div className={styles.registerField}>
            <p className={styles.registerLink}>
              Already have an account?
              <Link className={styles.registelLinkExact} to="/login">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
