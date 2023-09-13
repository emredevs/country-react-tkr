import React, { createContext, useState } from "react";

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const [countryList, setCountriesList] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [more, setMore] = useState(12);
  const [modal, setModal] = useState(false);
  const [modalId, setModalId] = useState();
  const values = {
    countryList,
    setCountriesList,
    searchCountry,
    setSearchCountry,
    more,
    setMore,
    modal,
    setModal,
    modalId,
    setModalId,
  };
  return (
    <CountriesContext.Provider value={values}>
      {children}
    </CountriesContext.Provider>
  );
}

export default CountriesContext;
