import { Router } from "express";
import loginController from "../controllers/loginController";

const loginRoutes = Router();

loginRoutes.post("/login", loginController.login);

export { loginRoutes };