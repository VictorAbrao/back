import { Router } from "express";
import cardsController from "../controllers/cardsController";
import authMiddleware from "../middlewares/authMiddleware";
import { logMiddleware } from "../middlewares/logMiddleware";

const cardsRoutes = Router();

cardsRoutes.get("/cards", authMiddleware, cardsController.index);
cardsRoutes.post("/cards", authMiddleware, cardsController.create);
cardsRoutes.put("/cards/:id", authMiddleware, logMiddleware, cardsController.update);
cardsRoutes.delete("/cards/:id", authMiddleware, logMiddleware, cardsController.delete);

export { cardsRoutes };