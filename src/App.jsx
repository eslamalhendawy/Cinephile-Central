import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Header from "./Components/Header/Header";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact Component={HomePage} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
