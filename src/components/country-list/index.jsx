import React, { useContext } from "react";
import CountriesContext from "../../context";
import styles from "./styles.module.css";
import Modal from "../modal";
export default function CountryList() {
  const { countryList, more, setMore, modal, setModal, modalId, setModalId } =
    useContext(CountriesContext);

  console.log(countryList, "CountryList");
  return (
    <div className={styles.countryListContainer}>
      {countryList.map((country, index) => (
        <div className={styles.countryListBox} key={index}>
          {modalId === index && (
            <Modal modal={modal}>
              <div>{country.capital}</div>
              <div>{country.continents}</div>
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                X
              </button>
            </Modal>
          )}
          <img src={country?.flags?.png} alt={country.name.common} />
          <h3>{country.name.common}</h3>
          <button
            id={index}
            onClick={() => {
              setModalId(index);
              setModal(true);
            }}
          >
            Detail
          </button>
        </div>
      ))}
      {countryList.length < 12 ? null : (
        <button
          className={styles.moreBtn}
          onClick={() => setMore((prev) => prev + 8)}
        >
          More <sup>{more}</sup>
        </button>
      )}
    </div>
  );
}
