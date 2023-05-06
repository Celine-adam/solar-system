import { StatusCodes } from "http-status-codes";
import satellitesDataset from "../satellites-dataset.js";

export const getByName = (req, res, next) => {
  try {
    const name = req.params.name.toLowerCase();
    const satellites = satellitesDataset.find(
      (satellite) => satellite.name.toLowerCase() === name
    );
    if (satellites) {
      return res.status(StatusCodes.OK).json(satellites);
    } else {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Satellite not found" });
    }
  } catch (error) {
    next(error);
  }
};
export const getByRadius = (req, res, next) => {
  try {
    const largestSatellite = satellitesDataset.reduce((prev, current) =>
      prev.radius > current.radius ? prev : current
    );

    const smallestSatellite = satellitesDataset.reduce((prev, current) =>
      prev.radius < current.radius ? prev : current
    );
    res
      .status(200)
      .send(
        `The satellite with the smallest radius is ${smallestSatellite.name}, with a size of ${smallestSatellite.radius} km.` +
          "\n" +
          `The satellite with the largest radius is ${largestSatellite.name}, with a size of ${largestSatellite.radius} km.`
      );
  } catch (error) {
    next(error);
  }
};
export const getByDensity = (req, res, error) => {
  try {
    const highestDensitySatellite = satellitesDataset.reduce((prev, current) =>
      prev.density > current.density ? prev : current
    );

    const lowestDensitySatellite = satellitesDataset.reduce((prev, current) =>
      prev.density < current.density ? prev : current
    );
    res.status(200).send(
      `The satellite with the highest density is ${highestDensitySatellite.name}, with a density of ${highestDensitySatellite.density}.and
      \n
        The satellite with the highest density is ${highestDensitySatellite.name}, with a density of ${highestDensitySatellite.density}`
    );
  } catch (error) {
    next(error);
  }
};
