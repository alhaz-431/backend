import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { SitterService } from "./sitter.service";

const createSitter = async (req: Request, res: Response) => {
  try {
    const result = await SitterService.createSitterIntoDB(
      req.body,
      req.user?.id,
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "User created",
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

const getAllSitter = async (req: Request, res: Response) => {
  try {
    const result = await SitterService.getAllSitterIntoDB(req.user?.id);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Siter retrived Successfully.",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 201,
      success: false,
      message: error?.message || "Something went wrong!!",
      data: null,
    });
  }
};

const getSingleSitter = async (req: Request, res: Response) => {
  try {
    const result = await SitterService.getSingleSitterIntoDB(
      req.params?.id as string,
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Pets retrived Successfully.",
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

const updateBookingStatus = async (req: Request, res: Response) => {
  try {
    const result = await SitterService.updateBookingStatusIntoDB(
      req.body.status,
      req.params?.id as string,
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Booking Status updated Successfully.",
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

export const SitterController = {
  // Add controller methods here
  createSitter,
  getAllSitter,
  getSingleSitter,
  updateBookingStatus,
};
