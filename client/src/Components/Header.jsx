import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <ul className="header">
        <li>
          <Link className="header-link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="header-link" to={"/planetsInfo"}>
            PlanetsInformation
          </Link>
        </li>
        <li>
          <Link className="header-link" to={"/satellites"}>
            Satellites
          </Link>
        </li>
      </ul>
    </div>
  );
}
