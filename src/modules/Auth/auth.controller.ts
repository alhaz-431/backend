import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import sendResponse from "../../utils/sendResponse";


const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AuthService.createUserIntoDB(req.body);

    sendResponse(res, {
      statusCode: 201, 
      success: true,
      message: "User registered successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};


const loginUser = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.loginUserIntoDB(req.body);

    
    res.cookie("token", result.token, {
      secure: process.env.NODE_ENV === "production", 
      httpOnly: true, 
      sameSite: "lax", 
      maxAge: 1000 * 60 * 60 * 24 * 7, 
    });

    sendResponse(res, {
      statusCode: 200, 
      success: true,
      message: "User logged in successfully",
      data: {
        user: result.user,
        token: result.token,
      },
    });
  } catch (error: any) {
    sendResponse(res, {
      statusCode: 401, 
      success: false,
      message: error?.message || "Invalid credentials",
      data: null,
    });
  }
};


const logoutUser = async (req: Request, res: Response) => {
  res.clearCookie("token");
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged out successfully",
    data: null,
  });
};

export const AuthController = {
  createUser,
  loginUser,
  logoutUser,
};