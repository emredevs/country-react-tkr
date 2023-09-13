import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import CountriesContext from "../../context";
import CountryForm from "../country-form";
export default function Header() {
  const { setMore, setModal } = useContext(CountriesContext);
  const language = [
    "English",
    "Chinese",
    "German",
    "Spanish",
    "French",
    "Arabic",
    "Italian",
    "Portuguese",
    "Russian",
  ];
  return (
    <div className={styles.headerContainer}>
      <ul className={styles.headerUl}>
        <li>
          <Link
            to={"/"}
            onClick={() => {
              setMore(12);
              setModal(false);
            }}
          >
            Home
          </Link>
        </li>
        {language.sort().map((lang, index) => (
          <li key={index}>
            <Link
              to={`/language/${lang}`}
              onClick={() => {
                setMore(12);
                setModal(false);
              }}
            >
              {lang}
            </Link>
          </li>
        ))}{" "}
        <CountryForm />
      </ul>
    </div>
  );
}
