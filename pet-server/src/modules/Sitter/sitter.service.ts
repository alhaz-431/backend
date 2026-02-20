import { includes } from "zod";
import { prisma } from "../../lib/prisma";
import { BookingStatus } from "../../../generated/prisma/enums";

const createSitterIntoDB = async (payload: any, userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const result = await prisma.sitterProfiles.create({
    data: { ...payload, sitterId: user.id },
  });
  return result;
};

const getAllSitterIntoDB = async (userId: string) => {
  console.log(userId);
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error("User not found!!");
  }

  const result = await prisma.sitterProfiles.findUniqueOrThrow({
    where: {
      sitterId: user.id,
    },
    include: {
      user: true,
    },
  });

  return result;
};

const getSingleSitterIntoDB = async (petId: string) => {
  const result = await prisma.pet.findUnique({
    where: {
      id: petId,
    },
  });

  return result;
};

const updateBookingStatusIntoDB = async (
  status: BookingStatus,
  bookingId: string,
) => {
  const result = await prisma.booking.update({
    where: {
      id: bookingId,
    },
    data: {
      status: status,
    },
  });

  return result;
};

export const SitterService = {
  // Add service methods here
  createSitterIntoDB,
  getAllSitterIntoDB,
  getSingleSitterIntoDB,
  updateBookingStatusIntoDB,
};
