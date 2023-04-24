import satellite from "../satellites-dataset.js";
import { StatusCodes } from "http-status-codes";
export const getByName = (req, res) => {
  const name = req.params.name;
  const satellite = satellite.find(
    (satellite) => satellite.name.toLowerCase() === name.toLowerCase()
  );
  if (satellite) {
    return res.status(StatusCodes.OK).json(satellite);
  } else {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ error: "Satellite not found" });
  }
};
export const getByRadius = (req, res) => {
  const pick = req.params.pick.toLowerCase();
  if (pick === "largest") {
    const largestSatellite = satellites.reduce((prev, current) =>
      prev.radius > current.radius ? prev : current
    );
    res
      .status(200)
      .send(
        `The satellite with the largest radius is ${largestSatellite.name}, with a size of ${largestSatellite.radius} km`
      );
  } else if (pick === "smallest") {
    const smallestSatellite = satellites.reduce((prev, current) =>
      prev.radius < current.radius ? prev : current
    );
    res
      .status(200)
      .send(
        `The satellite with the smallest radius is ${smallestSatellite.name}, with a size of ${smallestSatellite.radius} km`
      );
  } else {
    res.status(500).json({
      error: "Invalid pick value. Please choose either 'largest' or 'smallest'",
    });
  }
};
export const getByDensity = (req, res) => {
  const pick = req.params.pick.toLowerCase();
  if (pick === "highest") {
    const highestDensitySatellite = satellites.reduce((prev, current) =>
      prev.density > current.density ? prev : current
    );
    res
      .status(200)
      .send(
        `The satellite with the highest density is ${highestDensitySatellite.name}, with a density of ${highestDensitySatellite.density}`
      );
  } else if (pick === "lowest") {
    const lowestDensitySatellite = satellites.reduce((prev, current) =>
      prev.density < current.density ? prev : current
    );
    res
      .status(200)
      .send(
        `The satellite with the lowest density is ${lowestDensitySatellite.name}, with a density of ${lowestDensitySatellite.density}`
      );
  } else {
    res
      .status(500)
      .json({
        error: "Invalid pick value. Please choose either 'highest' or 'lowest'",
      });
  }
};
