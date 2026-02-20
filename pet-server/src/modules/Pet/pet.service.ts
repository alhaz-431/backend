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

const getAllPetIntoDB = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error("User not found!!");
  }

  const result = await prisma.pet.findMany({
    where: {
      ownerId: user.id,
    },
  });

  return result;
};

const getSinglePetIntoDB = async (petId: string) => {
  const result = await prisma.pet.findUnique({
    where: {
      id: petId,
    },
  });

  return result;
};

export const PetService = {
  // Add service methods here
  createPetIntoDB,
  getAllPetIntoDB,
  getSinglePetIntoDB,
};
