import React from "react";
import styles from "./AdminPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";

export default function AdminPage(props) {
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
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
      status: "Available",
    },
  ];
  const [duplicatedList, setDuplicatedList] = useState(medicineList);

  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e);
    setDuplicatedList(
      medicineList.filter((item) => {
        return item.name.toUpperCase().includes(e.toUpperCase());
      })
    );
    console.log(duplicatedList.length);
  }
  return (
    <div className={styles.wholePage}>
      <AdminNavBar
        checkState={props.checkState}
        setCheckState={props.setCheckState}
      />
      <div className={styles.container}>
        {props.checkState === 1 && (
          <div className={styles.adminItems}>
            <div className={styles.adminFirst}>
              <p>Items</p>
              <Link to="/admin/create">
                <button>Create new</button>
              </Link>
            </div>
            <div className={styles.adminSecond}>
              <div className={styles.adminInput}>
                <input
                  value={value}
                  onChange={(e) => handleChange(e.target.value)}
                  type="text"
                  placeholder="Search title"
                />
              </div>
              <div className={styles.adminList}>
                <div className={styles.adminTitles}>
                  <p className={styles.needBlank}></p>
                  <p className={styles.adminTitle}>Id</p>
                  <p className={styles.adminTitle}>Title</p>
                  <p className={styles.adminTitle}>Price</p>
                  <p className={styles.adminTitle}>Status</p>
                </div>
                {duplicatedList.map((item) => {
                  return item.name.length === 0 ? (
                    <div className={styles.lister}>
                      <p>Nothing Found!</p>
                    </div>
                  ) : (
                    <div className={styles.list}>
                      <div className={styles.needReallyBlank}>
                        <Link to="/admin/view">View</Link>
                      </div>
                      <div className={styles.adminTitleItem}>{item.id}</div>
                      <div className={styles.adminTitleItem}>{item.name}</div>
                      <div className={styles.adminTitleItem}>{item.price}</div>
                      <div className={styles.adminTitleItem}>{item.status}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {props.checkState === 2 && <div className={styles.adminUsers}></div>}
      </div>
    </div>
  );
}
