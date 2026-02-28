import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { MedicineService } from "./medicine.service";
import { medicineSchema } from "./medicine.validation";

const createMedicine = async (req: Request, res: Response) => {
  try {
    // 1️⃣ Validate request body with Zod
    const validatedData = medicineSchema.parse(req.body);

    // 2️⃣ Create medicine in DB (এখানে সেলার আইডি লাগে, তাই req.user?.id থাকবে)
    const result = await MedicineService.createMedicineIntoDB(validatedData, req.user?.id);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Medicine created successfully",
      data: result,
    });
  } catch (error: any) {
    console.error("Create Medicine Error:", error);
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error?.message || "Something went wrong",
      data: null,
    });
  }
};

const getAllMedicines = async (req: Request, res: Response) => {
  try {
    // সরাসরি সার্ভিস কল করুন
    const result = await MedicineService.getAllMedicinesFromDB();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Medicines retrieved successfully",
      data: result, // এই ডাটাই আপনার সেই ৪টি মেডিসিন
    });
  } catch (error: any) {
    // টার্মিনালে এরর দেখার জন্য এটি যোগ করুন
    console.log("Error logic caught:", error); 
    
    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: error?.message || "Internal server Error!",
      data: null,
    });
  }
};

const getSingleMedicine = async (req: Request, res: Response) => {
  try {
    const result = await MedicineService.getSingleMedicineFromDB(req.params?.id as string);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Medicine retrieved successfully",
      data: result,
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 400,
      success: false,
      message: error?.message || "Something went wrong!!",
      data: null,
    });
  }
};

export const MedicineController = {
  createMedicine,
  getAllMedicines,
  getSingleMedicine,
};