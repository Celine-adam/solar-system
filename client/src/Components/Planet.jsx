import React from "react";

export default function Planet({ planet }) {
  return (
    <div className="planet">
      <p>Mass: {planet.mass}</p>
      <p>Gravity: {planet.gravity}</p>
    </div>
  );
}
