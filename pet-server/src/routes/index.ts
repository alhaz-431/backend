import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { PetRoutes } from "../modules/Pet/pet.route";
import { SitterRoutes } from "../modules/Sitter/sitter.route";
import { ServiceRoutes } from "../modules/Service/service.route";
import { BookingRoutes } from "../modules/Booking/booking.route";

const router = Router();

const routerManger = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/pet",
    route: PetRoutes,
  },
  {
    path: "/sitter",
    route: SitterRoutes,
  },
  {
    path: "/service",
    route: ServiceRoutes,
  },
  {
    path: "/booking",
    route: BookingRoutes,
  },
];

routerManger.forEach((r) => router.use(r.path, r.route));

export default router;
