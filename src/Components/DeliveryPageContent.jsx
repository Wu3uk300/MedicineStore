import React from "react";
import styles from "./DeliveryPage.module.css";
import facebook from "./ImagesDelivery/facebook.png";
import insta from "./ImagesDelivery/insta.png";
import twitter from "./ImagesDelivery/twitter.png";
import youtube from "./ImagesDelivery/youtube.png";
import first from "./ImagesDelivery/1.png";
import second from "./ImagesDelivery/2.png";
import third from "./ImagesDelivery/3.png";

export default function DeliveryPageContent() {
  return (
    <div className={styles.main}>
      <div className={styles.contactUs}>
        <div className={styles.contactUsSquare_green}>
          <div className={styles.greensquareText}>
            <div className={styles.greensquareLogo}>Contact Us</div>
            <div className={styles.greensquareSecond}>
              Belongs to those who fail in their duty through weakness of will,
              which is the same as saying through.
            </div>
            <div className={styles.greensquarePhone}>(729) 334-51-81</div>
            <div className={styles.greensquareThird}>
              Monday–Friday: 9:00am – 6:00pm <br />
              Saturday–Sunday: 9:00am – 4:00pm
            </div>
            <div className={styles.greensquareFour}>GENERAL OFFICE:</div>
            <div className={styles.greensqaureFive}>
              9207 Lakeshore Rd Shreveport, <br /> Rhode Island 98563 <br />
              United States
            </div>
            <div className={styles.greensquareMail}>
              medilifecompany@example.com
            </div>
            <div className={styles.greensquareSocial}>
              <a href="#">
                {" "}
                <img src={facebook} alt="" />
              </a>
              <a href="#">
                {" "}
                <img src={insta} alt="" />
              </a>
              <a href="#">
                {" "}
                <img src={youtube} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactUsSquare}>
          <div className={styles.contactUsText}>
            <div className={styles.squareLogo}>Write us</div>
            <div className={styles.second}>
              These cases are perfectly simple and easy to distinguish. In a
              free hour, when our power of choice.
            </div>
          </div>
          <div className={styles.squareInputs}>
            <div className={styles.squareName}>
              <p>Name:</p>
              <input type="text" maxLength="40" placeholder="Enter your name" />
            </div>
            <div className={styles.squareEmail}>
              <p>Email:</p>
              <input type="text" maxLength="40" placeholder="Enter your mail" />
            </div>
            <div className={styles.squareMessage}>
              <p>Message:</p>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                maxLength="400"
                placeholder="Enter your message"
              ></textarea>
            </div>
          </div>
          <div className={styles.submitBtn}>
            <button className={styles.Btn}>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className={styles.adresses}>
        <div className={styles.adressSquare}>
          <div className={styles.squareTop}>
            <img src={first} alt="" />
          </div>
          <div className={styles.squareBottom}>
            <div className={styles.AdressSquareLogo}>
              North Chesterfield VA — <br />
              Mall Dr
            </div>
            <div className={styles.AdressSquareNumber}>+1 (729) 334-51-81</div>
            <div className={styles.AdressSquareAdress} first>
              9207 Lakeshore Rd Shreveport, <br />
              Rhode Island 98563 <br />
              United States
            </div>
            <div className={styles.AdressSquarefirstWorkingHrs}>
              Monday–Friday: 9:00am – 6:00pm <br />
              Saturday–Sunday: 9:00am – 4:00pm
            </div>
          </div>
        </div>
        <div className={styles.adressSquare}>
          <div className={styles.squareTop}>
            <img src={second} alt="" />
          </div>
          <div className={styles.squareBottom}>
            <div className={styles.AdressSquareLogo}>
              North Chesterfield VA — <br />
              Mall Dr
            </div>
            <div className={styles.AdressSquareNumber}>+1 (729) 334-51-81</div>
            <div className={styles.AdressSquareAdress}>
              9207 Lakeshore Rd Shreveport, <br />
              Rhode Island 98563 <br />
              United States
            </div>
            <div className={styles.AdressSquarefirstWorkingHrs}>
              Monday–Friday: 9:00am – 6:00pm <br />
              Saturday–Sunday: 9:00am – 4:00pm
            </div>
          </div>
        </div>
        <div className={styles.adressSquare}>
          <div className={styles.squareTop}>
            <img src={third} alt="" />
          </div>
          <div className={styles.squareBottom}>
            <div className={styles.AdressSquareLogo}>
              North Chesterfield VA — <br />
              Mall Dr
            </div>
            <div className={styles.AdressSquareNumber}>+1 (729) 334-51-81</div>
            <div className={styles.AdressSquareAdress}>
              9207 Lakeshore Rd Shreveport, <br />
              Rhode Island 98563 <br />
              United States
            </div>
            <div className={styles.AdressSquarefirstWorkingHrs}>
              Monday–Friday: 9:00am – 6:00pm <br />
              Saturday–Sunday: 9:00am – 4:00pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
