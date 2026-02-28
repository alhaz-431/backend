import { Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.createCategoryIntoDB(req.body);

  res.status(200).json({
    success: true,
    data: result,
  });
};

const getAllCategories = async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategoriesFromDB();

  res.status(200).json({
    success: true,
    data: result,
  });
};

const updateCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.updateCategoryIntoDB(
    req.params.id as string,
    req.body
  );

  res.status(200).json({
    success: true,
    data: result,
  });
};

const deleteCategory = async (req: Request, res: Response) => {
  const result = await CategoryService.deleteCategoryFromDB(req.params.id as string);

  res.status(200).json({
    success: true,
    data: result,
  });
};

export const CategoryController = {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
};