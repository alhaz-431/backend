import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;

// ১. পোল তৈরি করুন
const pool = new Pool({ connectionString });

// ২. অ্যাডাপ্টার তৈরি করুন (এটিই আপনার এরর ডিমান্ড করছে)
const adapter = new PrismaPg(pool);

// ৩. অ্যাডাপ্টারটি কনস্ট্রাক্টরে পাস করুন
export const prisma = new PrismaClient({ adapter });