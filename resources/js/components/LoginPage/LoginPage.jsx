import React from "react";
import styles from "./LoginPage.module.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className={styles.wholepage}>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <Link to="/">
            <div className={styles.loginLogo}>
              KONDRATOV <br /> STORE
            </div>
          </Link>

          <div className={styles.loginSmall}>Sign In to Kondratov Store</div>
          <div className={styles.loginField}>
            <div className={styles.loginUserName}>
              <div className={styles.loginUserNameText}>
                Username or email adress
              </div>
              <div className={styles.loginUserNameInput}>
                <input type="text" />
              </div>
            </div>
            <div className={styles.loginPassword}>
              <div className={styles.loginPasswordText}>
                <p>Password</p>
                <a href="#">Forgot password?</a>
              </div>
              <div className={styles.loginUserNameInput}>
                <input type="password" />
              </div>
            </div>
            <div className={styles.loginButton}>
              <Link to="/admin">
                <button>Sign In</button>
              </Link>
            </div>
          </div>
          <div className={styles.registerField}>
            <Link className={styles.googlereg}>
              <span>Sign in with Google</span>
            </Link>

            <p className={styles.registerLink}>
              New to Kondratov Store?
              <Link className={styles.registelLinkExact} to="/register">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
