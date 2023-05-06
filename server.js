import express from "express";
import { StatusCodes } from "http-status-codes";
import cors from "cors";
import satelliteRoutes from "./routes/satelliteRoutes.js";
import planetsRouters from "./routes/planetsRouter.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/satellite", satelliteRoutes);
app.use("/api/planets", planetsRouters);
app.all("*", (req, res) => {
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json("Invalid path");
});

app.listen(5001, () => {
  console.log("The server is listening for requests....");
});
