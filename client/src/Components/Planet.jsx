import React from "react";

export default function Planet({ planet }) {
  return (
    <div className="planet-card">
      <h3>{planet.name}</h3>
      <p>mass: {planet.mass}</p>
      <p>gravity: {planet.gravity}</p>
      <p>lengthOfDay: {planet.lengthOfDay}</p>
      <p>distanceFromSun: {planet.lengthOfDay}</p>
    </div>
  );
}
