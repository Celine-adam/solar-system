import React, { useState, useEffect } from "react";
// import { Route, Link, Routes } from "react-router-dom";
import axios from "axios";

export default function PlanetsInformation() {
  const [planets, setPlanets] = useState([]);
  const [distance, setDistance] = useState([]);
  const [earth, setEarth] = useState([]);
  const url = "http://localhost:5001/api/planets";
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${url}/find/Earth`);
      const data = res.data;
      setEarth(data);
    })();
  }, []);

  const numberOfMoons = async (e) => {
    console.log("im clicking");
    try {
      const res = await axios.get(`${url}/moons/${e.target.value}`);
      const data = res.data;
      setPlanets(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      setPlanets([]);
    }
  };
  const distanceFromSun = async (e) => {
    try {
      const res = await axios.get(`${url}/sun/${e.target.value}`);
      const data = res.data;
      setDistance(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      setDistance([]);
    }
  };

  return (
    <div className="planets">
      <h2>Earth</h2>
      <p>Here is some information about our beautiful planet. </p>
      <ul className="earth-info">
        <li>
          The Number of moons: <span>{earth.numberOfMoons}</span>
        </li>
        <li>
          The Mean temperature:<span> {earth.meanTemperature}</span>
        </li>
        <li>
          The Length of day:<span>{earth.lengthOfDay}</span>
        </li>
      </ul>
      <div className="wrapper">
        <h2>Number of Moons</h2>
        <div className="container">
          <div className="btn-div">
            <button value="most" className="btn" onClick={numberOfMoons}>
              Most
            </button>
            <button value="none" className="btn" onClick={numberOfMoons}>
              None
            </button>
          </div>
          <ul className="planet-info">
            {planets.map((planet) => (
              <li key={planet.id}>{planet.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <h2>Distance From the Sun</h2>
        <div className="container">
          <div className="btn-div">
            <button className="btn" value="furthest" onClick={distanceFromSun}>
              Furthest
            </button>
            <button className="btn" value="closest" onClick={distanceFromSun}>
              Closest
            </button>
          </div>
          <ul className="planet-info">
            {distance.map((planet) => (
              <li key={planet.id}>{planet.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
//   <Routes>
//   <Route exact path="/numberofmoons" element={<Planets />} />
//   <Route path="/satellits" element={<Satellites />} />
// </Routes>
// <div>
//   <Link className="link" to={"/planetsInfo"}>
//     Planets Information
//   </Link>
//   <Link className="link" to={"/satellits"}>
//     Satellites
//   </Link>
// </div>
