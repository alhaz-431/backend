import express from "express";
import auth, { UserRole } from "../../middlewares/auth";
import { OrderController } from "./orders.controller";

const router = express.Router();

// Customer creates a new order
router.post("/", auth(UserRole.CUSTOMER), OrderController.createOrder);

// Customer fetches all their orders
router.get("/", auth(UserRole.CUSTOMER), OrderController.getAllOrders);

// Customer fetches a single order by ID
router.get("/:id", auth(UserRole.CUSTOMER), OrderController.getSingleOrder);

// Seller fetches orders assigned to them (optional, if implemented)
// router.get("/seller", auth(UserRole.SELLER), OrderController.getSellerOrders);

export const OrderRoutes = router; // named export

