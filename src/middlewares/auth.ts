import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { secret } from "../modules/Auth/auth.service";
import { prisma } from "../lib/prisma";
import { Status } from "../../generated/prisma";


export enum UserRole {
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
  ADMIN = "ADMIN",
}

const auth = (...roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.split(" ")[1]; // Bearer token
      
      if (!token) throw new Error("Token not found!!");

      const decoded = jwt.verify(token, secret) as JwtPayload;

      const userData = await prisma.user.findUnique({
        where: { email: decoded.email },
      });

      if (!userData) throw new Error("Unauthorized!");
      if (userData.role !== decoded.role) throw new Error("Role mismatch!");
      if (userData.status !== Status.ACTIVE) throw new Error("Unauthorized!!"); // ✅ Use enum

      if (roles.length && !roles.includes(decoded.role as UserRole)) {
        throw new Error("Unauthorized!!!");
      }

      req.user = decoded;
      next();
    } catch (error: any) {
      next(error);
    }
  };
};

export default auth;