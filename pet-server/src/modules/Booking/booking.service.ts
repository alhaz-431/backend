import { Booking } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createBookingIntoDB = async (
  payload: Omit<Booking, "id" | "createdAt" | "updatedAt">,
  userId: string,
) => {
  // 1.User exists
  // 2.User is Onwer
  // 3.Pets belongs to that Owner
  // 4.Service exists
  // 5.Sitter exists
  // 6.Calculate Total Price
  // 7.Create Bookings

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  const pet = await prisma.pet.findUnique({
    where: {
      id: payload.petId,
    },
  });

  if (!pet) {
    throw new Error("Pet not found");
  }
  if (pet.ownerId !== userId) {
    throw new Error("You can book for your pets only");
  }
  const service = await prisma.service.findUnique({
    where: {
      id: payload.serviceId,
    },
  });
  if (!service) {
    throw new Error("Pet not found");
  }
  // Calculations
  const startTime = new Date(payload.startDate).getTime(); // Miliseconds 1
  const endTime = new Date(payload.endDate).getTime(); // Miliseconds  10

  if (endTime <= startTime) {
    throw new Error("End date must be after start date");
  }

  const duration = endTime - startTime;
  console.log(duration); // Miliseconds

  const durationInHour = duration / (1000 * 60 * 60);

  const totalPrice = durationInHour * service.price;

  const result = await prisma.booking.create({
    data: {
      ...payload,
      totalPrice,
    },
  });
  return result;
};

export const BookingService = {
  // Add service methods here
  createBookingIntoDB,
};
