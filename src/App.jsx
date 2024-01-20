import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import SearchResults from "./Components/SearchResults";
import MoviePage from "./Components/MoviePage";
import ShowPage from "./Components/ShowPage";

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
          <Route path="/movie/:id" exact element={<MoviePage />} />
          <Route path="/tv/:id" exact element={<ShowPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
