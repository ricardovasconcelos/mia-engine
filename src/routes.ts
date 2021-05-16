import { Router } from "express";

import authMiddleware from "./middlewares/authMiddleware";
import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";
import LocationController from "./controllers/LocationController";
import UserLocationController from "./controllers/UserLocationController";
import DiseaseController from "./controllers/DiseaseController";

const router = Router();

router.post("/users", UserController.store);
router.get("/users", authMiddleware, UserController.index);

router.post("/auth", AuthController.authenticate);

router.post("/disease", authMiddleware, DiseaseController.store);

router.get("/location", LocationController.show);
router.post("/location", authMiddleware, UserLocationController.store);

router.post("/infected", authMiddleware, UserLocationController.infected);
router.get("/infected", UserLocationController.show);


export { router };
