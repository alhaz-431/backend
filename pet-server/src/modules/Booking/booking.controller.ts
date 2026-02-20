import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { BookingService } from "./booking.service";

const createService = async (req: Request, res: Response) => {
  try {
    const result = await BookingService.createBookingIntoDB(
      req.body,
      req.user?.id,
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Booking Created Successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: error?.message || "Something went wrong!!",
      data: null,
    });
  }
};

export const BookingController = {
  // Add controller methods here
  createService,
};
