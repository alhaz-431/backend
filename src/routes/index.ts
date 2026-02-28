import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
// Module routes imports

import { UserRoutes } from "../modules/user/user.route";
import { MedicineRoutes } from "../modules/medicine/medicine.route";
import { OrderRoutes } from "../modules/orders/orders.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { ReviewRoutes } from "../modules/Reviews/reviews.route";

const router = Router();

// Route manager
const routerManager = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/medicines",
    route: MedicineRoutes,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
  {
    path: "/reviews",
    route: ReviewRoutes,
  },
];

// Apply all routes
routerManager.forEach((r) => router.use(r.path, r.route));

export default router;