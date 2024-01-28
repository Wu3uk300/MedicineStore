import React, { useEffect, useState } from "react";
import styles from "./ShopList.module.css";
import CarouselItem from "../Components/Carousel/CarouselItem";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Sort from "./Sort";
import { Link } from "react-router-dom";

export default function ShopList(props) {
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

  const [disableCheck, setDisableCheck] = useState();
  const [checkFilter, setCheckFilter] = useState(false);
  const [checkFormat, setCheckFormat] = useState(false);
  const [categoryDuplicate, setCategoryDuplicate] = useState([]);
  const [formatDuplicate, setFormatDuplicate] = useState([]);
  const [sortName, setSortName] = useState("");
  const [thinking, setThinking] = useState("");
  function changeValues(prices) {
    if (checkFilter === true && checkFormat === true) {
      let pricesSort = categoryDuplicate.filter(
        (item) => item.price > prices[0] && item.price < prices[1]
      );
      if (formatStatus.checked !== true) {
        let anotherSort = pricesSort.filter((item) => item.format === thinking);
        setFiltered(anotherSort);
        setValues(prices);
        setAnotherValue(values);
        if (filtered.length === 0) {
          setFiltered(anotherSort);
          setValues(prices);
          setAnotherValue(values);
          return;
        }
      }
      if (formatStatus.checked === true) {
        setFiltered(pricesSort);
        setValues(prices);
        setAnotherValue(values);
        if (filtered.length === 0) {
          setFiltered(pricesSort);
          setValues(prices);
          setAnotherValue(values);
          return;
        }
      }

      return;
    }
    if (checkFilter === true) {
      let pricesSort = categoryDuplicate.filter(
        (item) => item.price > prices[0] && item.price < prices[1]
      );
      setFiltered(pricesSort);
      setValues(prices);
      setAnotherValue(values);
      return;
    }

    setAnotherValue(values);
    setValues(prices);
    filtered = medicineList;
    setFiltered(
      filtered.filter(
        (item) => item.price > prices[0] && item.price < prices[1]
      )
    );
  }
  ////////////////////////////////////

  function changeCategorie(item, key) {
    setCheckFilter(true);
    setDisabled(false);
    filtered = medicineList;

    setFilterName([
      {
        category: item,
        id: key,
      },
    ]);
    let newArray = filtered.filter((obj) => obj.categorie === item);
    setCategoryDuplicate(newArray);
    setFiltered(newArray);

    if (item === "All") {
      setFiltered(
        medicineList.sort((a, b) => {
          if (disableCheck === 1) {
            return b.price - a.price;
          } else if (disableCheck === 2) {
            return a.price - b.price;
          } else if (disableCheck === 3) {
            return parseInt(b.rate[0]) - parseInt(a.rate[0]);
          } else {
            return 0;
          }
        })
      );
      setDisabled(true);
      setCheckFilter(false);
      setFilterName([]);
      setFiltered(medicineList);
    }
    setFormatFilter([]);
    if (!formatStatus) {
      return;
    }
    formatStatus.checked = true;
    if (categoryStatus.checked) {
      setCheckFormat(false);
    }
  }
  ///////////////////////////////////////
  function changeFormat(item, key) {
    setThinking(item);
    setCheckFormat(true);
    if (checkFilter === true) {
      filtered = categoryDuplicate;

      setFormatFilter([
        {
          format: item,
          id: key,
        },
      ]);
      let newArray = filtered.filter((obj) => obj.format === item);
      setFormatDuplicate(newArray);
      setFiltered(newArray);
      if (item === "All") {
        setFiltered(categoryDuplicate);
        setCheckFormat(false);
        setFormatFilter([]);
        setDisableCheck();
        setSortName("");
      }

      return;
    } else {
      filtered = medicineList;
      setFormatFilter([
        {
          format: item,
          id: key,
        },
      ]);

      let newArray = medicineList.filter((obj) => obj.format === item);
      setFormatDuplicate(newArray);
      setFiltered(newArray);
    }
    if (item === "All") {
      setFormatFilter([]);
      setCheckFormat(false);
      setFiltered(categoryDuplicate);
      setDisableCheck();
      setSortName("");
      return;
    }
  }

  function handleDelete() {
    if (!categoryStatus) {
      return;
    }
    setDisabled(true);
    setValues([minPrice(), maxPrice()]);
    setDisableCheck();
    setSortName("");
    setCheckFilter(false);
    setCheckFormat(false);
    setFilterName([]);
    setFormatFilter([]);
    categoryStatus.checked = true;
    formatStatus.checked = true;
    setFiltered(medicineList);
    setAnotherValue([minPrice(), maxPrice()]);
  }

  let categoryStatus = document.getElementById("0");
  let formatStatus = document.getElementById("20");

  let [filtered, setFiltered] = useState(medicineList);
  const [formatFilter, setFormatFilter] = useState([]);
  const [filterName, setFilterName] = useState([]);

  const categoryArray = [
    "All",
    "Acetaminophen",
    "Allergy Medicine",
    "Antacids",
    "Aspirin",
    "Baby Health Care",
    "Bandages",
    "Bathroom Cabinets",
    "Ibuprofen",
    "Sleeping Aids",
    "Storage Cabinets",
    "Vitamins",
  ];
  const formatArray = [
    "All",
    "Caplets",
    "Creams",
    "Drops",
    "Gels",
    "Liquid Gels",
    "Liquids",
    "Powders",
    "Softgels",
    "Spray",
    "Tablets",
  ];
  const minPrice = () => {
    let prices = medicineList.map((item) => {
      return item.price;
    });
    return Math.floor(Math.min.apply(Math, prices));
  };
  const maxPrice = () => {
    let prices = medicineList.map((item) => {
      return item.price;
    });
    return Math.ceil(Math.max.apply(Math, prices));
  };

  const [values, setValues] = useState([minPrice(), maxPrice()]);
  const [disabled, setDisabled] = useState(true);
  const [anotherValue, setAnotherValue] = useState([values[0], values[1]]);
  useEffect(() => {
    let categoryStatus = document.getElementById("1");

    if (props.state === 1) {
      setCheckFilter(true);
      setDisabled(false);
      filtered = medicineList;
      setFilterName([
        {
          category: "Acetaminophen",
          id: 1,
        },
      ]);
      let newArray = filtered.filter(
        (obj) => obj.categorie === "Acetaminophen"
      );
      setCategoryDuplicate(newArray);
      setFiltered(newArray);

      categoryStatus.checked = true;
    }
  }, []);
  return (
    <div>
      <div className={styles.shop}>
        <Sort
          disableCheck={disableCheck}
          setDisableCheck={setDisableCheck}
          sortName={sortName}
          setSortName={setSortName}
          list={filtered}
          setList={setFiltered}
          medicineList={medicineList}
        />
        <div className={styles.shopList}>
          <div className={styles.categories}>
            <div className={styles.medCategories}>
              <p>Categories</p>
              {categoryArray.map((item, key) => {
                return (
                  <div className={styles.categoriesItself}>
                    <input
                      onClick={(e) => changeCategorie(item, key)}
                      type="radio"
                      id={key}
                      name="category"
                    />
                    <label htmlFor={key}>{item}</label>
                  </div>
                );
              })}
            </div>
            <div className={styles.price}>
              <p>Price</p>
              <div className={styles.prices}>
                <div className={styles.minimumPrice}>${values[0]} </div>
                <div>---</div>
                <div className={styles.maximumPrice}>${values[1]}</div>
              </div>

              <div className={styles.slider}>
                <RangeSlider
                  onInput={(e) => changeValues(e)}
                  min={minPrice()}
                  max={maxPrice()}
                  defaultValue={[minPrice(), maxPrice()]}
                  value={anotherValue}
                />
              </div>
            </div>
            <div className={styles.format}>
              {!checkFilter && (
                <div className={styles.warningSign}>
                  Choose a category first!
                </div>
              )}
              <p>Format</p>
              {formatArray.map((item, key) => {
                return (
                  <div className={styles.formatItself}>
                    <input
                      disabled={disabled}
                      className={styles.formatBox}
                      onClick={() => changeFormat(item, key)}
                      type="radio"
                      id={key + 20}
                      name="format"
                    />

                    <label htmlFor={key + 20}>{item}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.filterList}>
            <div className={styles.filter}>
              <div className={styles.leftPart}>
                <p className={styles.filterText}>Filter:</p>
                <div className={styles.filtrationDemand}>
                  <div className={styles.filtrationExact}>
                    {filterName[0] && filterName[0].category}
                  </div>

                  <div className={styles.formatExact}>
                    {formatFilter[0] && formatFilter[0].format}
                  </div>
                </div>
              </div>
              <div className={styles.rightPart}>
                <button
                  onClick={() => handleDelete()}
                  className={styles.clearBtn}
                >
                  {" "}
                  Clear All
                </button>
              </div>
            </div>
            <div className={styles.medList}>
              {filtered.length === 0 ? (
                <div className={styles.sorryText}>
                  Nothing Found! Try to change your filters!
                </div>
              ) : (
                filtered.map((item) => (
                  <Link to={`/item/${item.id}`}>
                    <div className={styles.listItem} key={item.id}>
                      <CarouselItem data={item} />
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
