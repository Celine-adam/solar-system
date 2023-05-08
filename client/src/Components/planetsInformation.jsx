import React, { useState, useEffect } from "react";
// import { Route, Link, Routes } from "react-router-dom";
import axios from "axios";

export default function PlanetsInformation() {
  const [planets, setPlanets] = useState([]);
  const [distance, setDistance] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [day, setDay] = useState([]);
  const [orbital, setOrbital] = useState([]);
  const [earth, setEarth] = useState([]);
  const url = "https://solar-system-eumc.onrender.com";
  // "http://localhost:5001/api/planets";
  useEffect(() => {
    (async () => {
      const res = await axios.get(`${url}/api/planets/find/Earth`);
      const data = res.data;
      setEarth(data);
    })();
  }, []);

  const numberOfMoons = async (e) => {
    console.log("im clicking");
    try {
      const res = await axios.get(`${url}/api/planets/moons/${e.target.value}`);
      const data = res.data;
      setPlanets(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      setPlanets([]);
    }
  };
  const distanceFromSun = async (e) => {
    try {
      const res = await axios.get(`${url}/api/planets/sun/${e.target.value}`);
      const data = res.data;
      setDistance(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      setDistance([]);
    }
  };
  const meanTemperature = async (e) => {
    console.log("im clicking");
    try {
      const res = await axios.get(
        `${url}/api/planets/temperature/${e.target.value}`
      );
      const data = res.data;
      setTemperature(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      setTemperature([]);
    }
  };
  const lengthOfDay = async (e) => {
    console.log("im clicking");
    try {
      const res = await axios.get(`${url}/api/planets/day/${e.target.value}`);
      const data = res.data;
      setDay(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      setDay([]);
    }
  };
  const orbitalPeriod = async (e) => {
    console.log("im clicking");
    try {
      const res = await axios.get(`${url}/api/planets/orbit/${e.target.value}`);
      const data = res.data;
      setOrbital(Array.isArray(data) ? data : [data]);
    } catch (error) {
      console.error(error);
      setOrbital([]);
    }
  };

  return (
    <div className="planets-info">
      <h1>Earth</h1>
      <section id="earth-info-section">
        <p>Here is some information about our beautiful planet.</p>
        <p>
          The number of moons: <span>{earth.numberOfMoons}</span>
        </p>
        <p>
          The mean temperature: <span>{earth.meanTemperature}</span>
        </p>
        <p>
          The length of day: <span>{earth.lengthOfDay}</span>
        </p>
      </section>
      <section>
        <div className="wrapper">
          <h2>Number of Moons</h2>
          <div className="container">
            <div className="btn-group">
              <button className="btn" value="most" onClick={numberOfMoons}>
                The planets that have the most moons
              </button>
              <button className="btn" value="none" onClick={numberOfMoons}>
                The planets with no moons
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
            <div className="btn-group">
              <button
                className="btn"
                value="furthest"
                onClick={distanceFromSun}
              >
                The planet farthest from the sun
              </button>
              <button className="btn" value="closest" onClick={distanceFromSun}>
                The planet closest to the sun
              </button>
            </div>
            <ul className="planet-info">
              {distance.map((planet) => (
                <li key={planet.id}>{planet.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <h2>Mean Temperature</h2>
          <div className="container">
            <div className="btn-group">
              <button className="btn" value="hottest" onClick={meanTemperature}>
                The hottest planet
              </button>
              <button className="btn" value="coldest" onClick={meanTemperature}>
                The coldest planet
              </button>
            </div>
            <ul className="planet-info">
              {temperature.map((planet) => (
                <li key={planet.id}>{planet.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <h2>Length Of Day</h2>
          <div className="container">
            <div className="btn-group">
              <button className="btn" value="longest" onClick={lengthOfDay}>
                The planet with the longest day
              </button>
              <button className="btn" value="shortest" onClick={lengthOfDay}>
                The planet with the shortest day
              </button>
            </div>
            <ul className="planet-info">
              {day.map((planet) => (
                <li key={planet.id}>{planet.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrapper">
          <h2>Orbital Period</h2>
          <div className="container">
            <div className="btn-group">
              <button className="btn" value="longest" onClick={orbitalPeriod}>
                The planet with the longest orbital
              </button>
              <button className="btn" value="shortest" onClick={orbitalPeriod}>
                The planet with the shortest orbital
              </button>
            </div>
            <ul className="planet-info">
              {orbital.map((planet) => (
                <li key={planet.id}>{planet.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
