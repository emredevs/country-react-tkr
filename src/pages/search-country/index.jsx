import React, { useContext, useEffect } from "react";
import Header from "../../components/header";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CountryList from "../../components/country-list";
import CountriesContext from "../../context";

export default function SearchCountryPage() {
  const { countryList, setCountriesList } = useContext(CountriesContext);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${id}`)
      .then((res) => setCountriesList(res.data))
      .catch((err) => {
        console.error(err);
        alert(`${err.message} non-existent country name`);
        navigate("/");
      });
  }, [id, setCountriesList, navigate]);
  return (
    <div>
      <Header />
      <h1>Search Country Page:{countryList.length}</h1>
      <CountryList />
    </div>
  );
}
