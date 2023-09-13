import React, { useContext, useEffect } from "react";
import Header from "../../components/header";
import { useParams } from "react-router-dom";
import axios from "axios";
import CountriesContext from "../../context";
import CountryList from "../../components/country-list";
export default function LanguagePage() {
  const { id } = useParams();
  const { more, countryList, setCountriesList } = useContext(CountriesContext);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/lang/${id}`)
      .then((res) => setCountriesList(res.data?.slice(0, more)));
  }, [id, more, setCountriesList]);
  console.log(`languaga ${id}`, countryList);
  return (
    <div>
      <Header />
      <h1>Language Country:{countryList.length} </h1>
      <CountryList />
    </div>
  );
}
