import dotenv from "dotenv";
import "reflect-metadata";
import express from "express";
import { router } from "./routes";
import Cors from "cors";

import "./database";
dotenv.config();

const app = express();

const corsOptions = {
  origin: ["http://localhost:3000", "https://mia-webapp.vercel.app"],
  optionsSuccessStatus: 200,
};
app.use(Cors(corsOptions));
app.use(express.json());
app.use(router);

export { app };
