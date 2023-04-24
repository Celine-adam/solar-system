import express from "express";
import {
  getByDensity,
  getByName,
  getByRadius,
} from "../controllers/satelliteController.js";
const router = express.Router();
router.get(`/find/:name`, getByName);
router.get(`/size/:pick`, getByRadius);
router.get(`/density/:pick`, getByDensity);
export default router;
