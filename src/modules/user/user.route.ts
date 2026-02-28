import express from "express";
import { UserController } from "./user.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

// Admin search users
router.get("/search", auth(UserRole.ADMIN), UserController.searchUsers);

export const UserRoutes = router;
