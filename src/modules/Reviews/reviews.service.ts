import { prisma } from "../../lib/prisma";

const createReviewIntoDB = async (userId: string, payload: any) => {
  const result = await prisma.reviews.create({
    data: {
      customerId: userId,
      ...payload,
    },
  });

  return result;
};

const getReviewsByMedicine = async (medicineId: string) => {
  return prisma.reviews.findMany({
    where: { medicineId },
    include: {
      customer: true,
    },
  });
};

export const ReviewService = {
  createReviewIntoDB,
  getReviewsByMedicine,
};