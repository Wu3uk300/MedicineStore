import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ItemPageMain.module.css";
import ItemItself from "./ItemItself.jsx";
import avatar from "./images/avatar.jpg";
export default function ItemPageMain() {
  const params = useParams();
  let medicineList = [
    {
      id: 1,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/12-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: 23.99,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Acetaminophen",
      format: "Caplets",
    },
    {
      id: 2,
      usedFor: "Antibiotics",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/22.png",
      rate: "4/5",
      name: "Alka-Seltzer Plus Day & Night Multi-Symptom",
      price: 4.36,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Acetaminophen",
      format: "Caplets",
    },
    {
      id: 3,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/Rectangle-19-3-1-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: 10.49,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Allergy Medicine",
      format: "Caplets",
    },
    {
      id: 4,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/10.png",
      rate: "4/5",
      name: "HALLS Honey Lemon Cough DropsIncludes one 30 ct.",
      price: 4.78,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Antacids",
      format: "Creams",
    },
    {
      id: 5,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/12-400x400.png",
      rate: "5/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: 23.99,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Aspirin",
      format: "Creams",
    },
    {
      id: 6,
      usedFor: "Digestion",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/22.png",
      rate: "4/5",
      name: "Alka-Seltzer Plus Day & Night Multi-Symptom",
      price: 4.36,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Baby Health Care",
      format: "Drops",
    },
    {
      id: 7,
      usedFor: "Antibiotics",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/Rectangle-19-3-1-400x400.png",
      rate: "2/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: 10.49,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Bandages",
      format: "Gels",
    },
    {
      id: 8,
      usedFor: "Digestion",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/10.png",
      rate: "4/5",
      name: "HALLS Honey Lemon Cough DropsIncludes one 30 ct.",
      price: 4.78,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Bathroom Cabinets",
      format: "Liquid Gels",
    },
    {
      id: 9,
      usedFor: "Antibiotics",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/12-400x400.png",
      rate: "5/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: 23.99,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Ibuprofen",
      format: "Liquids",
    },
    {
      id: 10,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/22.png",
      rate: "4/5",
      name: "Alka-Seltzer Plus Day & Night Multi-Symptom",
      price: 4.36,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Sleeping Aids",
      format: "Powders",
    },
    {
      id: 11,
      usedFor: "Digestion",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/Rectangle-19-3-1-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: 10.49,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Storage Cabinets",
      format: "Softgels",
    },
    {
      id: 12,
      usedFor: "Antibiotics",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/10.png",
      rate: "4/5",
      name: "HALLS Honey Lemon Cough DropsIncludes one 30 ct.",
      price: 4.78,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Vitamins",
      format: "Spray",
    },
    {
      id: 13,
      usedFor: "Painkillers",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/22.png",
      rate: "3/5",
      name: "Alka-Seltzer Plus Day & Night Multi-Symptom",
      price: 4.36,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Acetaminophen",
      format: "Caplets",
    },
    {
      id: 14,
      usedFor: "Painkillers",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/Rectangle-19-3-1-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler LevmFetamfetamine, 0.007 oz",
      price: 10.49,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Allergy Medicine",
      format: "Caplets",
    },
    {
      id: 15,
      usedFor: "Painkillers",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/10.png",
      rate: "4/5",
      name: "HALLS Honey Lemon Cough DropsIncludes one 30 ct.",
      price: 4.78,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Antacids",
      format: "Creams",
    },
    {
      id: 16,
      usedFor: "Painkillers",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/10.png",
      rate: "5/5",
      name: "HALLS Honey Lemon Cough DropsIncludes one 30 ct.",
      price: 4.78,
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      categorie: "Aspirin",
      format: "Drops",
    },
  ];
  const date = new Date();
  const [reviews, setReviews] = useState([
    {
      image: avatar,
      rating: "4/5",
      user: "admin",
      date: `${date}`.slice(0, 25),
      comment: "Cool",
    },
  ]);

  let checked = medicineList.filter((item) => {
    return item.id === Number(params.itemid);
  })[0];

  const [checkState, setCheckState] = useState(1);
  const [checkActive, setCheckActive] = useState(1);
  const [TAValue, setTAValue] = useState("");
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [checkRating, setCheckRating] = useState(404);
  const [checkComment, setCheckComment] = useState(false);
  const [checkName, setCheckName] = useState(false);
  let ratingDelete = document.getElementById(`${checkRating}`);
  function changeVisibility(e) {
    if (e.id === "descriptionBtn") {
      setCheckState(1);
      setCheckActive(1);
    } else if (e.id === "addInfoBtn") {
      setCheckState(2);
      setCheckActive(2);
    } else if (e.id === "reviewsBtn") {
      setCheckState(3);
      setCheckActive(3);
    }
  }

  function handleCreate() {
    if (checkRating === 404) {
      setCheckRating(0);
      return;
    }
    if (TAValue.length >= 4) {
      setCheckComment(false);
    }
    if (TAValue.length < 4) {
      setCheckComment(true);
      return;
    }
    if (commentName.length >= 2) {
      setCheckName(false);
    }
    if (commentName.length < 2) {
      setCheckName(true);
      return;
    }

    setReviews([
      ...reviews,
      {
        image: avatar,
        rating: `${checkRating}/5`,
        user: `${commentName}`,
        date: `${date}`.slice(0, 25),
        comment: `${TAValue}`,
      },
    ]);
    ratingDelete.checked = false;
    setTAValue("");
    setCommentName("");
    setCommentEmail("");
  }
  function handleRating(e) {
    setCheckRating(e.target.id);
  }
  return (
    <div className={styles.wholePage}>
      <ItemItself checked={checked} />
      <div className={styles.additionalInfo}>
        <div className={styles.chooseBar}>
          <button
            className={
              checkActive === 1 ? styles.activeBtn : styles.descriptionBtn
            }
            id="descriptionBtn"
            onClick={(e) => changeVisibility(e.target)}
          >
            Description
          </button>
          <button
            className={checkActive === 2 ? styles.activeBtn : styles.addInfoBtn}
            id="addInfoBtn"
            onClick={(e) => changeVisibility(e.target)}
          >
            Additional information
          </button>
          <button
            id="reviewsBtn"
            onClick={(e) => changeVisibility(e.target)}
            className={checkActive === 3 ? styles.activeBtn : styles.reviewsBtn}
          >
            {reviews.length === 0 ? "Reviews" : `Reviews (${reviews.length})`}
          </button>
        </div>
        <div
          className={checkState === 1 ? styles.descriptionField : styles.hidden}
        >
          <div>
            <h2 className={styles.descriptionH2}>Description</h2>
          </div>
          <div className={styles.descriptionOtherInfo}>
            <div className={styles.descriptionOtherInfoLeft}>
              <div className={styles.textBlock}>
                <p className={styles.blackText}>Allergy alert:</p>
                <p className={styles.blueText}>
                  Ibuprofen may cause a severe allergic reaction, especially in
                  people allergic to aspirin. Symptoms may include: hives,
                  facial swelling, asthma (wheezing), shock, skin reddening,
                  rash, blisters. If an allergic reaction occurs, stop use And
                  seek medical help right away.
                </p>
              </div>
              <div className={styles.textBlock}>
                <p className={styles.blackText}>Do not use:</p>
                <p className={styles.blueText}>
                  If you have ever had an allergic reaction to any other pain
                  reliever/fever reducer, right before or after heart surgery.
                </p>
              </div>
              <div className={styles.textBlock}>
                <p className={styles.blackText}>
                  Ask a doctor or pharmacist before use if:
                </p>
                <p className={styles.blueText}>
                  Taking aspirin for heart attack or stroke, because ibuprofen
                  may decrease this benefit of aspirin, under a doctor`s care
                  for any serious condition, taking any other drug.
                </p>
              </div>
              <div className={styles.textBlock}>
                <p className={styles.blackText}>
                  Stop use and ask a doctor if:
                </p>
                <p className={styles.blueText}>
                  You experience any of the following signs of stomach bleeding:
                  feel faint, vomit blood, have bloody or black stools, have
                  stomach pain that does not get better, pain gets worse or
                  lasts more than 10 days, fever gets worse or lasts more than 3
                  days, redness or swelling is present in the painful area, any
                  new symptoms appear.
                </p>
              </div>

              <div className={styles.textBlock}>
                <p className={styles.blackText}>Inactive Ingredients:</p>
                <p className={styles.blueText}>
                  Colloidal Silicon Dioxide, Corn Starch, Croscarmellose Sodium,
                  Hypromellose, Iron Oxide Red, Iron Oxide Yellow,
                  Microcrystalline Cellulose, Polyethylene Glycol, Polysorbate
                  80, Stearic Acid, Titanium Dioxide.
                </p>
              </div>
            </div>
            <div className={styles.descriptionOtherInfoRight}>
              <div className={styles.textBlock}>
                <p className={styles.blackText}>Stomach bleeding warning:</p>
                <p className={styles.blueText}>
                  This product contains an nsaid, which may cause severe stomach
                  bleeding. The chances are higher if you, are age 60 or older,
                  have had stomach ulcers or bleeding problems, take a blood
                  thinning (anticoagulant) or steroid drug, take other drugs
                  containing prescription or nonprescription NSAIDs [aspirin,
                  ibuprofen, naproxen, or others], have 3 or more alcoholic
                  drinks every day while using this product, take more or for a
                  longer time than directed.
                </p>
              </div>

              <div className={styles.textBlock}>
                <p className={styles.blackText}>
                  Ask a doctor before use if you have:
                </p>
                <p className={styles.blueText}>
                  You have problems or serious side effects from taking pain
                  relievers or fever reducers, the stomach bleeding warning
                  applies to you, you have a history of stomach problems, such
                  as heartburn, you have high blood pressure, heart disease,
                  liver cirrhosis, or kidney disease, you have asthma, you are
                  taking a diuretic.
                </p>
              </div>

              <div className={styles.textBlock}>
                <p className={styles.blackText}>When using this product:</p>
                <p className={styles.blueText}>
                  Take with food or milk if stomach upset occurs, the risk of
                  heart attack or stroke may increase if you use more than
                  directed or for longer than directed.
                </p>
              </div>

              <div className={styles.textBlock}>
                <p className={styles.blackText}>Pregnancy/Breastfeeding:</p>
                <p className={styles.blueText}>
                  Ask a health professional before use. It is especially
                  important not to use ibuprofen during the last 3 months of
                  pregnancy unless definitely directed to do so by a doctor
                  because it may cause problems in the unborn child or
                  complications during delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={checkState === 2 ? styles.additionalField : styles.hidden}
        >
          <div className={styles.additionalText}>Additional information</div>
          <div className={styles.additionalColomn}>
            <div className={styles.additionalLeft}>
              <div>Format:</div>
              <div>Categorie:</div>
              <div>Rate:</div>
            </div>
            <div className={styles.additionalRight}>
              <div>{checked.format}</div>
              <div>{checked.categorie}</div>
              <div>{checked.rate}</div>
            </div>
          </div>
        </div>
        <div className={checkState === 3 ? styles.reviewsField : styles.hidden}>
          <div className={styles.reviewLogo}>
            {reviews.length} review for {checked.name}
          </div>
          <div className={styles.reviews}>
            {reviews.map((item) => {
              return (
                <div className={styles.review}>
                  <div className={styles.reviewAvatar}>
                    <img
                      style={{ width: 80, height: 80 }}
                      src={item.image}
                      alt="user avatar"
                    />
                  </div>
                  <div className={styles.reviewInfo}>
                    <p className={styles.reviewRating}>{item.rating}</p>
                    <p className={styles.reviewUserInfo}>
                      {item.user} {item.date.length === 0 ? "" : "- "}
                      {item.date}
                    </p>
                    <p className={styles.reviewComment}>{item.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.addAReview}>
            <div
              style={{
                color: "rgb(82,82,250)",
                fontWeight: 600,
                marginTop: 20,
              }}
            >
              Add a review
            </div>
            <div
              style={{
                fontSize: 15,
                color: "rgb(131, 131, 131)",
                marginBottom: 20,
                marginTop: 20,
              }}
            >
              Your email address will not be published. Required fields are
              marked *
            </div>
            {checkRating === 0 && (
              <div className={styles.ratingError}>Please rate the item</div>
            )}
            <div className={styles.yourRating}>
              <div style={{ color: "rgb(82,82,250)", marginRight: 10 }}>
                Your Rating*
              </div>
              <div className={styles.possibleRating}>
                <div className={styles.yourRateDefined}>
                  <input
                    onClick={(e) => handleRating(e)}
                    type="radio"
                    name="rating"
                    id="1"
                  />
                  <label htmlFor="1">1</label>
                </div>
                <div className={styles.yourRateDefined}>
                  <input
                    onClick={(e) => handleRating(e)}
                    type="radio"
                    name="rating"
                    id="2"
                  />
                  <label htmlFor="2">2</label>
                </div>
                <div className={styles.yourRateDefined}>
                  <input
                    onClick={(e) => handleRating(e)}
                    type="radio"
                    name="rating"
                    id="3"
                  />
                  <label htmlFor="3">3</label>
                </div>
                <div className={styles.yourRateDefined}>
                  <input
                    onClick={(e) => handleRating(e)}
                    type="radio"
                    name="rating"
                    id="4"
                  />
                  <label htmlFor="4">4</label>
                </div>
                <div className={styles.yourRateDefined}>
                  <input
                    onClick={(e) => handleRating(e)}
                    type="radio"
                    name="rating"
                    id="5"
                  />
                  <label htmlFor="5">5</label>
                </div>
              </div>
            </div>
            {checkComment && (
              <div className={styles.reviewItselfError}>
                Your comment should be not less than 4 characters!
              </div>
            )}

            <div className={styles.reviewItself}>
              <div style={{ color: "rgb(82,82,250)", marginTop: 20 }}>
                Your review *
              </div>
              <div>
                <textarea
                  onChange={(e) => setTAValue(e.target.value)}
                  value={TAValue}
                  name=""
                  id=""
                  cols="90"
                  rows="10"
                  maxLength="800"
                ></textarea>
              </div>
            </div>

            {checkName && (
              <div className={styles.checkNameError}>
                Your name should be not less than 2 characters!
              </div>
            )}
            <div className={styles.reviewName}>
              <div style={{ color: "rgb(82,82,250)", marginTop: 20 }}>
                Name*
              </div>
              <div>
                <input
                  value={commentName}
                  type="text"
                  size="50"
                  maxLength="30"
                  onChange={(e) => setCommentName(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.reviewEmail}>
              <div style={{ color: "rgb(82,82,250)", marginTop: 20 }}>
                Email
              </div>
              <input
                value={commentEmail}
                type="text"
                size="50"
                onChange={(e) => setCommentEmail(e.target.value)}
              />
            </div>

            <div className={styles.sendBtn}>
              <button
                onClick={() => handleCreate()}
                className={styles.submitBtn}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
