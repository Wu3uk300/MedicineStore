import React, { useState } from "react";
import CarouselItem from "./CarouselItem.jsx";
import styles from "./CarouselList.module.css";
import CarouselSorting from "./CarouselSorting.jsx";
import { Link } from "react-router-dom";

export default function CarouselList(props) {
  const [medicineList, setMedicineList] = useState([
    {
      id: 1,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/12-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: "$23.99",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 2,
      usedFor: "Antibiotics",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/22.png",
      rate: "4/5",
      name: "Alka-Seltzer Plus Day & Night Multi-Symptom",
      price: "$4.36",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 3,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/Rectangle-19-3-1-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: "$10.49",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 4,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/10.png",
      rate: "4/5",
      name: "HALLS Honey Lemon Cough DropsIncludes one 30 ct.",
      price: "$4.78",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 5,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/12-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: "$23.99",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 6,
      usedFor: "Digestion",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/22.png",
      rate: "4/5",
      name: "Alka-Seltzer Plus Day & Night Multi-Symptom",
      price: "$4.36",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 7,
      usedFor: "Antibiotics",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/Rectangle-19-3-1-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: "$10.49",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 8,
      usedFor: "Digestion",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/10.png",
      rate: "4/5",
      name: "HALLS Honey Lemon Cough DropsIncludes one 30 ct.",
      price: "$4.78",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 9,
      usedFor: "Antibiotics",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/12-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: "$23.99",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 10,
      usedFor: "Cough",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/22.png",
      rate: "4/5",
      name: "Alka-Seltzer Plus Day & Night Multi-Symptom",
      price: "$4.36",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 11,
      usedFor: "Digestion",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/Rectangle-19-3-1-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: "$10.49",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 12,
      usedFor: "Antibiotics",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/10.png",
      rate: "4/5",
      name: "HALLS Honey Lemon Cough DropsIncludes one 30 ct.",
      price: "$4.78",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 13,
      usedFor: "Painkillers",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/22.png",
      rate: "4/5",
      name: "Alka-Seltzer Plus Day & Night Multi-Symptom",
      price: "$4.36",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 14,
      usedFor: "Painkillers",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/Rectangle-19-3-1-400x400.png",
      rate: "4/5",
      name: "Equate Vapor Inhaler Levmetamfetamine, 0.007 oz",
      price: "$10.49",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
    {
      id: 15,
      usedFor: "Painkillers",
      pic: "https://ld-wp73.template-help.com/woostroid2/skins/pharmacy/v2/wp-content/uploads/2020/04/10.png",
      rate: "4/5",
      name: "HALLS Honey Lemon Cough DropsIncludes one 30 ct.",
      price: "$4.78",
      description:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
    },
  ]);
  const [currentItems, setCurrentItems] = useState(medicineList);
  const [checkDef, setCheckDef] = useState(true);

  const [xPos, setXpos] = useState(0);
  function handleSort(e) {
    if (e.innerText === "All") {
      setCurrentItems(medicineList);
      setXpos(0);
      return;
    }
    setXpos(0);
    setCurrentItems(
      medicineList.filter((item) => item.usedFor === e.innerText)
    );
    setCheckDef(false);
  }

  return (
    <div className={styles.recommended}>
      <div className={styles.recText}>
        <div>
          <p>Recommended Products</p>
        </div>
        <div>
          <div className={styles.sortLinks}>
            <div className={styles.componentsAndNavLinks}>
              <div className={styles.componentLinks}>
                <CarouselSorting
                  checkDef={checkDef}
                  name={props.name}
                  id={props.id}
                  sort={handleSort}
                  medName="All"
                />

                <CarouselSorting
                  name={props.name}
                  id={props.id}
                  sort={handleSort}
                  medName="Antibiotics"
                />

                <CarouselSorting
                  name={props.name}
                  id={props.id}
                  sort={handleSort}
                  medName="Cough"
                />

                <CarouselSorting
                  name={props.name}
                  id={props.id}
                  sort={handleSort}
                  medName="Digestion"
                />

                <CarouselSorting
                  name={props.name}
                  id={props.id}
                  sort={handleSort}
                  medName="Painkillers"
                />
              </div>

              <div className={styles.navLinks}>
                <button
                  className={styles.scrollBtn}
                  disabled={xPos === 0 ? true : false}
                  onClick={() => {
                    setXpos((x) => x + 300);
                  }}
                >
                  {" "}
                  &laquo;
                </button>
                <button
                  disabled={
                    xPos === -300 * (currentItems.length - 4) ||
                    currentItems.length < 4
                      ? true
                      : false
                  }
                  className={styles.scrollBtn}
                  onClick={() => {
                    setXpos((x) => x - 300);
                  }}
                >
                  &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.list}>
        <div
          className={styles.line}
          style={{ transform: `translateX(${xPos}px)` }}
        >
          {currentItems.map((item) => (
            <div className={styles.listItem} key={item.id}>
              <CarouselItem data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
