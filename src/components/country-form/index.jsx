import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CountryForm() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    navigate(`/search/${search}`);
  };
  return (
    <form onSubmit={formSubmit}>
      <input
        style={{
          outline: "2px solid black",
          borderRadius: "20px",
          padding: "5px",
          margin: "0 5px",
        }}
        type="text"
        placeholder="Country Name..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}
