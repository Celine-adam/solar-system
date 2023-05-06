import { StatusCodes } from "http-status-codes";
import planetsDataset from "../planets-dataset.js";
export const getPlanets = (req, res, next) => {
  try {
    const planetsData = planetsDataset.map((planet) => planet);

    return res.status(StatusCodes.OK).json(planetsData);
  } catch (error) {
    next(error);
  }
};
export const getByName = (req, res, next) => {
  try {
    const name = req.params.name;
    const planetsData = planetsDataset.find((planet) => planet.name === name);
    if (planetsData) {
      return res.status(StatusCodes.OK).json(planetsData);
    } else {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Planet not found" });
    }
  } catch (error) {
    next(error);
  }
};
export const getByRadius = (req, res, next) => {
  try {
    const pick = req.params.pick.toLowerCase();
    if (pick === "largest") {
      const largestPlanet = planetsDataset.reduce((prev, current) =>
        prev.radius > current.radius ? prev : current
      );
      res
        .status(200)
        .send(
          `The planet with the largest radius is ${largestPlanet.name}, with a size of ${largestSatellite.radius} km`
        );
    } else if (pick === "smallest") {
      const smallestPlanet = planetsDataset.reduce((prev, current) =>
        prev.radius < current.radius ? prev : current
      );
      res
        .status(200)
        .send(
          `The planet with the smallest radius is ${smallestPlanet.name}, with a size of ${smallestSatellite.radius} km`
        );
    } else {
      res.status(500).json({
        error:
          "Invalid pick value. Please choose either 'largest' or 'smallest'",
      });
    }
  } catch (error) {
    next(error);
  }
};
export const getByNumberOfMoons = async (req, res, next) => {
  try {
    const pick = req.params.pick.toLowerCase();
    if (pick === "most") {
      const mostMoons = planetsDataset.reduce((prev, current) =>
        prev.numberOfMoons > current.numberOfMoons ? prev : current
      );
      res.status(200).send(mostMoons);
    } else if (pick === "none") {
      const nonMoons = planetsDataset.filter(
        (planet) => planet.numberOfMoons === 0
      );

      res.status(200).send(nonMoons);
    } else res.status(404).send("bad request");
  } catch (error) {
    next(error);
  }
};
export const getByDistanceFromSun = (req, res, next) => {
  try {
    const pick = req.params.pick.toLowerCase();
    if (pick === "furthest") {
      const furthestPlanet = planetsDataset.reduce((prev, current) =>
        prev.distanceFromSun > current.distanceFromSun ? prev : current
      );
      res.status(200).send(furthestPlanet);
    } else if (pick === "closest") {
      const closestPlanet = planetsDataset.reduce((prev, current) =>
        prev.distanceFromSun < current.distanceFromSun ? prev : current
      );
      res.status(200).send(closestPlanet);
    } else {
      res.status(500).json({
        error:
          "Invalid pick value. Please choose either 'furthest' or 'closest'",
      });
    }
  } catch (error) {
    next(error);
  }
};
export const getByMeanTemperature = (req, res, next) => {
  try {
    const pick = req.params.pick;
    if (pick === "hottest") {
      const hottestPlanet = planetsDataset.reduce((prev, current) =>
        prev.meanTemperature > current.meanTemperature ? prev : current
      );
      res.status(200).send(hottestPlanet);
    } else if (pick === "coldest") {
      const coldestPlanet = planetsDataset.reduce((prev, current) =>
        prev.meanTemperature < current.meanTemperature ? prev : current
      );
      res.status(200).send(coldestPlanet);
    } else {
      res.status(500).json({
        error:
          "Invalid pick value. Please choose either 'hottest' or 'coldest'",
      });
    }
  } catch (error) {
    next(error);
  }
};
export const getByLengthOfDay = (req, res, next) => {
  try {
    const pick = req.params.pick.toLowerCase();
    if (pick === "longest") {
      const longestDay = planetsDataset.reduce((prev, current) =>
        prev.lengthOfDay > current.lengthOfDay ? prev : current
      );
      res.status(200).send(longestDay);
    } else if (pick === "shortest") {
      const shortestDay = planetsDataset.reduce((prev, current) =>
        prev.lengthOfDay < current.lengthOfDay ? prev : current
      );
      res.status(200).send(shortestDay);
    } else {
      res.status(500).json({
        error:
          "Invalid pick value. Please choose either 'longest' or 'shortest'",
      });
    }
  } catch (error) {
    next(error);
  }
};
export const getByOrbitalPeriod = (req, res, next) => {
  try {
    const pick = req.params.pick.toLowerCase();
    if (pick === "longest") {
      const longestPeriod = planetsDataset.reduce((prev, current) =>
        prev.orbitalPeriod > current.orbitalPeriod ? prev : current
      );
      res.status(200).send(longestPeriod);
    } else if (pick === "shortest") {
      const shortestPeriod = planetsDataset.reduce((prev, current) =>
        prev.orbitalPeriod < current.orbitalPeriod ? prev : current
      );
      res.status(200).send(shortestPeriod);
    } else {
      res.status(500).json({
        error:
          "Invalid pick value. Please choose either 'longest' or 'shortest'",
      });
    }
  } catch (error) {
    next(error);
  }
};
