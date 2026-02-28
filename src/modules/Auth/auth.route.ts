import express from "express";
import { AuthController } from "./auth.controller";

const router = express.Router();

// Controller method অনুযায়ী
router.post("/register", AuthController.createUser);   // <-- register → createUser
router.post("/login", AuthController.loginUser);       // <-- login → loginUser

export const AuthRoutes = router;