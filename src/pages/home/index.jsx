import React, { useContext, useEffect } from "react";
import Header from "../../components/header";
import CountryList from "../../components/country-list";
import CountriesContext from "../../context";
import axios from "axios";

export default function HomePage() {
  const { setCountriesList, more } = useContext(CountriesContext);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/all`)
      .then((res) => setCountriesList(res.data.slice(0, more)));
  }, [more, setCountriesList]);
  return (
    <div>
      <Header />
      <CountryList />
    </div>
  );
}
