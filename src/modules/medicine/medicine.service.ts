import { prisma } from "../../lib/prisma";

// ১. নতুন মেডিসিন তৈরি করা (Create)
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
    // যদি রিলেশনে সমস্যা থাকে, তবে রিলেশন ছাড়া ডাটা পাঠাবে
    console.log("Relation Error, fetching basic data:", error.message);
    return await prisma.medicines.findMany({
      where: sellerId ? { sellerId } : {},
    });
  }
};

// ৩. আইডি দিয়ে একটি নির্দিষ্ট মেডিসিন খুঁজে বের করা
const getSingleMedicineFromDB = async (id: string) => {
  return prisma.medicines.findUnique({
    where: { id },
  });
};

// ৪. মেডিসিনের তথ্য আপডেট করা
const updateMedicineIntoDB = async (id: string, data: any) => {
  return prisma.medicines.update({
    where: { id },
    data,
  });
};

// ৫. ডাটাবেজ থেকে মেডিসিন মুছে ফেলা
const deleteMedicineFromDB = async (id: string) => {
  return prisma.medicines.delete({
    where: { id },
  });
};

// সবগুলো ফাংশন এক্সপোর্ট করা হলো
export const MedicineService = {
  createMedicineIntoDB,
  getAllMedicinesFromDB,
  getSingleMedicineFromDB,
  updateMedicineIntoDB,
  deleteMedicineFromDB,
};