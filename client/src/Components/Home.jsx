import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  return (
    <div>
      <h1>Solar System</h1>
      <section className="clearfix">
        <ul className="solarsystem">
          <li className="sun">
            <a href="#sun">
              <span>Sun</span>
            </a>
          </li>
          <li className="mercury">
            <a href="#mercury">
              <span>Mercury</span>
            </a>
          </li>
          <li className="venus">
            <a href="#venus">
              <span>Venus</span>
            </a>
          </li>
          <li className="earth">
            <a href="#earth">
              <span>
                Earth<span class="moon"> &amp; Moon</span>
              </span>
            </a>
          </li>
          <li className="mars">
            <a href="#mars">
              <span>Mars</span>
            </a>
          </li>
          <li className="asteroids_meteorids">
            <span>Asteroids &amp; Meteorids</span>
          </li>
          <li className="jupiter">
            <a href="#jupiter">
              <span>Jupiter</span>
            </a>
          </li>
          <li className="saturn">
            <a href="#saturn">
              <span>
                Saturn &amp; <span class="ring">Ring</span>
              </span>
            </a>
          </li>
          <li className="uranus">
            <a href="#uranus">
              <span>Uranus</span>
            </a>
          </li>
          <li className="neptune">
            <a href="#neptune">
              <span>Neptune</span>
            </a>
          </li>
          <li className="pluto">
            <a href="#pluto">
              <span>Pluto</span>
            </a>
          </li>
        </ul>
      </section>
      <ul id="descriptions">
        <li>
          <h2 id="sun">Sun</h2>
        </li>
        <li>
          <h2 id="mercury">Mercury</h2>
        </li>
        <li>
          <h2 id="venus">Venus</h2>
        </li>

        <li>
          <h2 id="earth">Earth</h2>
        </li>

        <li>
          <h2 id="mars">Mars</h2>
        </li>

        <li>
          <h2 id="jupiter">Jupiter</h2>
        </li>

        <li>
          <h2 id="saturn">Saturn</h2>
        </li>

        <li>
          <h2 id="uranus">Uranus</h2>
        </li>

        <li>
          <h2 id="neptune">Neptune</h2>
        </li>

        <li>
          <h2 id="pluto">Pluto</h2>
        </li>
      </ul>
    </div>
  );
}
