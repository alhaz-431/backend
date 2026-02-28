import { prisma } from "../../lib/prisma";
import { UserSearchableFields } from "./user.constant";

export const UserService = {
  searchUsers: async (searchTerm: string) => {
    const users = await prisma.user.findMany({
      where: {
        OR: UserSearchableFields.map((field) => ({
          [field]: { contains: searchTerm, mode: "insensitive" },
        })),
      },
    });
    return users;
  },

  getAllUsers: async () => {
    return prisma.user.findMany();
  },
};