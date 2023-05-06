import axios from "axios";
import { useState, useEffect } from "react";

export default function Satellites() {
  const [name, setName] = useState("");
  const [satelliteName, setSatelliteName] = useState([]);
  const [satelliteRadius, setSatelliteRadius] = useState("");
  const [satelliteDensity, setSatelliteDensity] = useState("");
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSatelliteName = async (event) => {
    event.preventDefault(); // prevent form from submitting and refreshing page
    try {
      const res = await axios.get(
        `http://localhost:5001/api/satellite/find/${name}`
      ); // combine URL and path
      const data = res.data;
      setSatelliteName(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      setSatelliteName([]);
    }
  };
  const url = "http://localhost:5001/api/satellite";
  useEffect(() => {
    const density = async () => {
      const res = await axios.get(`${url}/density`);
      const data = res.data;
      setSatelliteDensity(data);
    };
    const radius = async () => {
      const res = await axios.get(`${url}/size`);
      const data = res.data;
      setSatelliteRadius(data);
    };
    density();
    radius();
  }, []);

  return (
    <div className="satellite-div">
      <h1>Satellites</h1>
      <form className="satellite-form" onSubmit={handleSatelliteName}>
        <input
          placeholder="Satellite Name"
          onChange={handleChange}
          value={name}
        ></input>

        <button type="submit">Search</button>
      </form>
      {satelliteName.map((satellite) => (
        <div className="satellite-name" key={satellite.id}>
          <h2>{satellite.name}</h2>
          <p>Gm: {satellite.gm}</p>
          <p>Radius: {satellite.radius}</p>
          <p>Density: {satellite.density}</p>
          <p>Magnitude: {satellite.magnitude}</p>
        </div>
      ))}
      <div className="satellite-info ">
        <h2>Satellites Radius</h2>
        <p>{satelliteRadius}</p>
        <h2>Satellites Density</h2>
        <p>{satelliteDensity}</p>
      </div>
    </div>
  );
}
