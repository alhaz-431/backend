import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { SitterController } from "./sitter.controller";

const router = express.Router();

router.post("/", auth(UserRole.sitter), SitterController.createSitter);
router.get("/", auth(UserRole.sitter), SitterController.getAllSitter);
router.get("/:id", auth(UserRole.owner));
router.patch(
  "/booking/:id",
  auth(UserRole.sitter),
  SitterController.updateBookingStatus,
);
export const SitterRoutes = router;
