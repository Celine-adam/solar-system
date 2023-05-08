import { useState, useEffect } from "react";
import axios from "axios";
import Planet from "./Planet.jsx";

export default function Planets() {
  const [planets, setPlanets] = useState([]);
  const url = " https://solar-system-eumc.onrender.com";
  // "http://localhost:5001/api/planets";
  const [hoveredPlanetIndex, setHoveredPlanetIndex] = useState(-1);

  const handleMouseOver = (index) => {
    setHoveredPlanetIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredPlanetIndex(-1);
  };

  useEffect(() => {
    async function fetchPlanets() {
      try {
        const res = await axios.get(`${url}/api/planets`);
        setPlanets(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPlanets();
  }, []);

  return (
    <div>
      <ul id="descriptions">
        {planets.map((planet, i) => (
          <li key={i}>
            <h2
              onMouseOver={() => handleMouseOver(i)}
              onMouseOut={handleMouseOut}
            >
              {planet.name}
            </h2>
          </li>
        ))}
        {hoveredPlanetIndex > -1 && (
          <Planet planet={planets[hoveredPlanetIndex]} />
        )}
      </ul>
    </div>
  );
}
