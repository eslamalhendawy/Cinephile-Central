import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import SearchResults from "./Components/SearchResults";

import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search/:type/:query" exact element={<SearchResults />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
