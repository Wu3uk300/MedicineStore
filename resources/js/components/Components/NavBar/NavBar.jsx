import React, { useState } from "react";
import "./NavStyles.css";
import NavCatalog from "./NavCatalog.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
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
  const [nav, setNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showInput, setShowInput] = useState();
  const nothing = "Nothing Value!";

  async function handleShow() {
    setNav(true);
    setShowNav(true);
  }

  function handleCheck() {
    let checking = document.querySelector(".NavCatalog_catalog__zqNLp");
    if (checking) {
      setNav(false);
    }
  }
  const [value, setValue] = useState("");
  function handleChange(val) {
    setValue(val);
    setShowInput(
      medicineList.filter((item) => {
        return item.name.toUpperCase().includes(val.toUpperCase());
      })
    );
  }
  return (
    <div className="logit">
      <div onMouseEnter={() => setShowSearch(false)} className="nav">
        <Link to="/" className="logo">
          <div onMouseEnter={handleCheck}>
            <span className="bigSpan">KONDRATOV</span> <br />{" "}
            <span>PHARMACY STORE</span>
          </div>
        </Link>
        <div className="navRight">
          <div onMouseEnter={handleCheck} className="topPart">
            <div className="number">+1 (729) 334-51-81 </div>
            <p>Online order from 8am-9pm</p>
            <Link to="/whishlist" className="whishList">
              Whishlist (0)
            </Link>
            <Link to="/login" className="logdata">
              Login
            </Link>
            <span>or</span>
            <Link to="/register" className="logdata">
              Register
            </Link>
          </div>

          <div className="bottomPart">
            <button onMouseEnter={handleShow}>PRODUCT CATALOG</button>

            <input
              onChange={(e) => handleChange(e.target.value)}
              value={value}
              onMouseEnter={handleCheck}
              type="text"
              placeholder="Search by name"
            />

            <a className="cart" href="google.com">
              Cart 0 Items - $0.00
            </a>
          </div>
        </div>
      </div>

      <div>
        {value.length > 1 && (
          <div className={styles.searchBar}>
            {showInput.slice(0, 10).map((item) => {
              return (
                <Link className={styles.linkToItem} to={`/item/${item.id}`}>
                  <div
                    onClick={() => setValue("")}
                    className={styles.showInputItem}
                  >
                    <div>
                      {item.name}---$
                      {item.price}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        <TransitionGroup>
          {nav && (
            <CSSTransition key={showNav} timeout={300} classNames="item">
              <NavCatalog showNav={showNav} setShowNav={setShowNav} />
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </div>
  );
}
