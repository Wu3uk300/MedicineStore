import React from "react";
import styles from "./AboutUs.module.css";
import firstPic from "./ImagesAboutPage/1.jpg";
import secondPic from "./ImagesAboutPage/2.jpg";
import shipping from "./ImagesAboutPage/3.jpg";
import rating from "./ImagesAboutPage/4.jpg";
import deals from "./ImagesAboutPage/5.jpg";
import support from "./ImagesAboutPage/6.jpg";
import rewards from "./ImagesAboutPage/7.jpg";
import brands from "./ImagesAboutPage/8.jpg";
import doctorpic from "./ImagesAboutPage/GroupOfDoctors.png";

export default function AboutUsContent() {
  return (
    <div className={styles.wholePage}>
      <div className={styles.infoPart}>
        <div className={styles.infoTopPart}>
          <div className={styles.infoSquare}>
            <img src={firstPic} alt="" />
          </div>
          <div className={styles.infoSquare}>
            <div className={styles.topText}>
              <div className={styles.topBigText}>
                We are Always <br /> Happy to Help You.
              </div>
              <div className={styles.topSmallOne}>
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame.
              </div>
              <div className={styles.topSmallTwo}>
                Belongs to those who fail in their duty through weakness of
                will, which is the same as saying through shrinking from toil
                and pain.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.infoBottomPart}>
          <div className={styles.anotherOne}>
            <div className={styles.bottomText}>
              <div className={styles.bottomBigText}>
                Which Services we can Provide <br />
                to You at any Time
              </div>
              <div className={styles.bottomSmallText}>
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when our power of choice is untrammelled and when
                nothing prevents our being able to do what we like best. Every
                pleasure is to be welcomed:
              </div>
              <div className={styles.counting}>
                <li>These cases are perfectly</li>
                <li>Simple and easy to distinguish</li>
                <li>In a free hour, when</li>
                <li>Our power of choice is untrammelled</li>
                <li>When nothing prevents </li>
              </div>
            </div>
          </div>
          <div className={styles.infoSquare}>
            <img src={secondPic} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.imagesandLogo}>
        <div className={styles.imageandlogoSquare}>
          <div className={styles.imageandlogoPic}>
            <img src={shipping} alt="" />
          </div>
          <div className={styles.imageandlogoText}>
            <div className={styles.imageandLogoBigText}>Free Shipping</div>
            <div className={styles.imageandLogoSmallText}>
              On all orders over $35
            </div>
          </div>
        </div>

        <div className={styles.imageandlogoSquare}>
          <div className={styles.imageandlogoPic}>
            <img src={rating} alt="" />
          </div>
          <div className={styles.imageandlogoText}>
            <div className={styles.imageandLogoBigText}>90 Day Returns</div>
            <div className={styles.imageandLogoSmallText}>
              Not satisfied? Send it back
            </div>
          </div>
        </div>

        <div className={styles.imageandlogoSquare}>
          <div className={styles.imageandlogoPic}>
            <img src={deals} alt="" />
          </div>
          <div className={styles.imageandlogoText}>
            <div className={styles.imageandLogoBigText}>Exclusive Deals</div>
            <div className={styles.imageandLogoSmallText}>
              Specials & discounts every day
            </div>
          </div>
        </div>

        <div className={styles.imageandlogoSquare}>
          <div className={styles.imageandlogoPic}>
            <img src={support} alt="" />
          </div>
          <div className={styles.imageandlogoText}>
            <div className={styles.imageandLogoBigText}>24/7 Support</div>
            <div className={styles.imageandLogoSmallText}>
              Here for you, every step of the way
            </div>
          </div>
        </div>

        <div className={styles.imageandlogoSquare}>
          <div className={styles.imageandlogoPic}>
            <img src={rewards} alt="" />
          </div>
          <div className={styles.imageandlogoText}>
            <div className={styles.imageandLogoBigText}>Earn Rewards</div>
            <div className={styles.imageandLogoSmallText}>
              10% rewards credit on every purchase
            </div>
          </div>
        </div>

        <div className={styles.imageandlogoSquare}>
          <div className={styles.imageandlogoPic}>
            <img src={brands} alt="" />
          </div>
          <div className={styles.imageandlogoText}>
            <div className={styles.strangePic}>
              <div className={styles.imageandLogoBigText}>Top Brands</div>
              <div className={styles.imageandLogoSmallText}>
                Thousands of products from brands you love
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.phoneInfo}>
        <div className={styles.phoneInfoText}>
          <h2>
            Order Medicine Online <br /> and Take Medicine Without Waiting in
            Line
          </h2>
          <a className={styles.phoneNumber} href="#">
            (729) 334-51-81
          </a>
          <p>
            Monday–Friday: 9:00am – 6:00pm <br />
            Saturday: 9:00am – 4:00pm
          </p>
        </div>
        <div className={styles.phoneInfoPic}>
          <img width="850" height="520" src={doctorpic} alt="" />
        </div>
      </div>
    </div>
  );
}
