import express from "express";
import {
  getByDensity,
  getByName,
  getByRadius,
} from "../controllers/satelliteController.js";
const router = express.Router();
router.get("/find/:name", getByName);
router.get("/size", getByRadius);
router.get("/density", getByDensity);
export default router;
