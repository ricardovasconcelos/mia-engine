import { Router } from "express";

import authMiddleware from "./middlewares/authMiddleware";
import UserController from "./controllers/UserController";
import AuthController from "./controllers/AuthController";
import LocationController from "./controllers/LocationController";
import UserLocationController from "./controllers/UserLocationController";

const router = Router();

router.post("/users", UserController.store);
router.get("/users", authMiddleware, UserController.index);

router.post("/auth", AuthController.authenticate);

router.post("/location", authMiddleware, UserLocationController.store);
router.post("/infected", authMiddleware, UserLocationController.infected);
router.get("/infected", UserLocationController.show);

router.get("/location", LocationController.show);

export { router };
