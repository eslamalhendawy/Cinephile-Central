import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
