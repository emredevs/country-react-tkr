import "./App.css";
import { CountriesProvider } from "./context";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import LanguagePage from "./pages/language";
import SearchCountryPage from "./pages/search-country";
function App() {
  return (
    <div className="App">
      <CountriesProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/language/:id" element={<LanguagePage />} />
          <Route path="/search/:id" element={<SearchCountryPage />} />
        </Routes>
      </CountriesProvider>
    </div>
  );
}

export default App;
