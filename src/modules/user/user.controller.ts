import { Request, Response } from "express";
import { UserService } from "./user.service";

export const UserController = {
  searchUsers: async (req: Request, res: Response) => {
    try {
      const searchTerm = req.query.search as string;
      const users = await UserService.searchUsers(searchTerm);
      res.status(200).json(users);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};