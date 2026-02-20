import express from "express";
import { BookingController } from "./booking.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();
router.post("/", auth(UserRole.owner), BookingController.createService);
export const BookingRoutes = router;
