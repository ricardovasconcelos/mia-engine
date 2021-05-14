"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var authMiddleware_1 = __importDefault(require("./middlewares/authMiddleware"));
var UserController_1 = __importDefault(require("./controllers/UserController"));
var AuthController_1 = __importDefault(require("./controllers/AuthController"));
var LocationController_1 = __importDefault(require("./controllers/LocationController"));
var UserLocationController_1 = __importDefault(require("./controllers/UserLocationController"));
var router = express_1.Router();
exports.router = router;
router.post("/users", UserController_1.default.store);
router.get("/users", authMiddleware_1.default, UserController_1.default.index);
router.post("/auth", AuthController_1.default.authenticate);
router.post("/location", authMiddleware_1.default, UserLocationController_1.default.store);
router.post("/infected", authMiddleware_1.default, UserLocationController_1.default.infected);
router.get("/infected", UserLocationController_1.default.show);
router.get("/location", LocationController_1.default.show);
