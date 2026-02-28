import { Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { MedicineService } from "./medicine.service";
import { medicineSchema } from "./medicine.validation";

const createMedicine = async (req: Request, res: Response) => {
  try {
 
    const medicineData = {
      ...req.body,
      sellerId: req.user?.id, 
    };

   
    const validatedData = medicineSchema.parse(medicineData);

    const result = await MedicineService.createMedicineIntoDB(
      validatedData, 
      req.user?.id as string
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Medicine created successfully",
      data: result,
    });
  } catch (error: any) {
    
    const errorMessage = error?.issues 
      ? error.issues.map((i: any) => i.message).join(", ") 
      : error?.message;

    sendResponse(res, {
      statusCode: 500,
      success: false,
      message: errorMessage || "Something went wrong",
      data: null,
    });
  }
};

const getAllMedicines = async (req: Request, res: Response) => {
  try {
   
    const result = await MedicineService.getAllMedicinesFromDB();

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Medicines retrieved successfully",
      data: result, 
    });
  } catch (error: any) {
   
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