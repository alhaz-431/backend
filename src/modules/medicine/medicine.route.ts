import express from "express";
import { MedicineController } from "./medicine.controller";
import auth, { UserRole } from "../../middlewares/auth";

const router = express.Router();

// Seller adds a new medicine
router.post("/", auth(UserRole.SELLER), MedicineController.createMedicine);

// Seller gets all their medicines
router.get("/", auth(UserRole.SELLER), MedicineController.getAllMedicines);

// Seller gets a single medicine by id
router.get("/:id", auth(UserRole.SELLER), MedicineController.getSingleMedicine);

// Export as MedicineRoutes
export const MedicineRoutes = router;