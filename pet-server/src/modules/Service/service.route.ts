import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { ServiceController } from "./service.controller";

const router = express.Router();
router.post("/", auth(UserRole.sitter), ServiceController.createService);
router.get("/", auth(UserRole.sitter), ServiceController.getAllService);
router.get("/:id", auth(UserRole.owner));
export const ServiceRoutes = router;
