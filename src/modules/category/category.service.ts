import { prisma } from "../../lib/prisma";

const createCategoryIntoDB = async (payload: any) => {
  return prisma.category.create({
    data: payload,
  });
};

const getAllCategoriesFromDB = async () => {
  return prisma.category.findMany();
};

const updateCategoryIntoDB = async (id: string, payload: any) => {
  return prisma.category.update({  
    where: { id },
    data: payload,
  });
};

const deleteCategoryFromDB = async (id: string) => {
  return prisma.category.delete({
    where: { id },
  });
};

export const CategoryService = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  updateCategoryIntoDB,
  deleteCategoryFromDB,
};