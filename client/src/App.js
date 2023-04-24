import "./App.css";

import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Satellites from "./Components/Satellites.jsx";
import PlanetsInformation from "./Components/planetsInformation.jsx";
import Header from "./Components/Header";
// import Satellites from "./Components/Satellites";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/planetsInfo" element={<PlanetsInformation />} />
        <Route path="/satellites" element={<Satellites />} />
      </Routes>
    </div>
  );
}

export default App;
