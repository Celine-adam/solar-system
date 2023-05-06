import express from "express";
import {
  getByName,
  getByRadius,
  getByNumberOfMoons,
  getByDistanceFromSun,
  getByLengthOfDay,
  getByMeanTemperature,
  getByOrbitalPeriod,
  getPlanets,
} from "../controllers/planetsController.js";
const router = express.Router();
router.get("/", getPlanets);
router.get("/find/:name", getByName);
router.get("/size/:pick", getByRadius);
router.get("/moons/:pick", getByNumberOfMoons);
router.get("/sun/:pick", getByDistanceFromSun);
router.get("/temperature/:pick", getByMeanTemperature);
router.get("/day/:pick", getByLengthOfDay);
router.get("/orbit/:pick", getByOrbitalPeriod);
export default router;
