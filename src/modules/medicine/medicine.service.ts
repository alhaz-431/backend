import { prisma } from "../../lib/prisma";


const createMedicineIntoDB = async (data: any, sellerId: string) => {
  return prisma.medicines.create({
    data: {
      ...data,
      sellerId: sellerId,
    },
  });
};
const getAllMedicinesFromDB = async (sellerId?: string) => {
  try {
    return await prisma.medicines.findMany({
      where: sellerId ? { sellerId } : {},
      include: {
        category: true, 
        seller: true,   
      },
    });
  } catch (error: any) {
   
    console.log("Relation Error, fetching basic data:", error.message);
    return await prisma.medicines.findMany({
      where: sellerId ? { sellerId } : {},
    });
  }
};

const getSingleMedicineFromDB = async (id: string) => {
  return prisma.medicines.findUnique({
    where: { id },
  });
};


const updateMedicineIntoDB = async (id: string, data: any) => {
  return prisma.medicines.update({
    where: { id },
    data,
  });
};

const deleteMedicineFromDB = async (id: string) => {
  return prisma.medicines.delete({
    where: { id },
  });
};


export const MedicineService = {
  createMedicineIntoDB,
  getAllMedicinesFromDB,
  getSingleMedicineFromDB,
  updateMedicineIntoDB,
  deleteMedicineFromDB,
};