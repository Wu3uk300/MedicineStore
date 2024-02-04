import React, { useState } from "react";
import style from "./NavCatalog.module.css";
import navpic from "./Navpic.jpg";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";

export default function NavCatalog(props) {
  const [nav, setNav] = useState(false);

  function handleCheck() {
    let checking = document.querySelector(".NavCatalog_secondcatalog__BInpb");

    if (!checking) {
      props.setShowNav(false);
    }
  }
  function totalEnd() {
    setNav(false);
    props.setShowNav(false);
  }

  if (props.showNav) {
    return (
      <div
        onMouseEnter={() => props.setShowNav(true)}
        onMouseLeave={totalEnd}
        className={style.catalog}
      >
        <div onMouseLeave={handleCheck} className={style.firstcatalog}>
          <div className={style.selectMed}>
            <Link to="/shop" className={style.componentLink}>
              <button
                className={style.catalogbutton}
                onMouseEnter={() => setNav(true)}
              >
                <div className={style.medButn}>
                  {" "}
                  <div>Medication</div>
                  <div>&#62;</div>
                </div>
              </button>
              <button
                onMouseEnter={() => setNav(false)}
                className={style.catalogbutton}
              >
                Vitamins and Supplements
              </button>
              <button
                onMouseEnter={() => setNav(false)}
                className={style.catalogbutton}
              >
                Beauty market
              </button>
              <button
                onMouseEnter={() => setNav(false)}
                className={style.catalogbutton}
              >
                Hygiene
              </button>
              <button
                onMouseEnter={() => setNav(false)}
                className={style.catalogbutton}
              >
                Medical devices
              </button>
              <button
                onMouseEnter={() => setNav(false)}
                className={style.catalogbutton}
              >
                Mom and baby
              </button>
              <button
                onMouseEnter={() => setNav(false)}
                className={style.catalogbutton}
              >
                Diet food
              </button>
              <button
                onMouseEnter={() => setNav(false)}
                className={style.catalogbutton}
              >
                Nursing
              </button>
            </Link>
          </div>
        </div>
        <TransitionGroup component={null}>
          {nav && (
            <CSSTransition key={nav} timeout={300} classNames="item">
              <div className={style.secondcatalog}>
                <div className={style.item__left}>
                  <h2>Medication</h2>
                  <a href="#" className={style.catalogLink}>
                    Allergy
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Obstetrics and gynecology
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Diabetes
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Infectious and viral diseases
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Respiratory system
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Flu and the common cold
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Anti-inflammatory and analgesic
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Musculoskeletal system
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Gastrointestinal tract and liver
                  </a>
                </div>
                <div className={style.item__mid}>
                  <a href="#" className={style.catalogLink}>
                    Blood diseases
                  </a>
                  <a href="#" className={style.catalogLink}>
                    The cardiovascular system
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Neurological and mental illness
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Genitourinary system
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Endocrine diseases
                  </a>
                  <a href="#" className={style.catalogLink}>
                    Dermatological diseases
                  </a>
                </div>
                <div className={style.item__right}>
                  <img src={navpic} alt="" />
                </div>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
}
