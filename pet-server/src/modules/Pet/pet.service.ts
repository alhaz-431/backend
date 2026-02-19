import { prisma } from "../../lib/prisma";

const createPetIntoDB = async (payload: any, userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error("Invalid user");
  }

  const result = await prisma.pet.create({
    data: { ...payload, ownerId: userId },
  });
  return result;
};

export const PetService = {
  // Add service methods here
  createPetIntoDB,
};
