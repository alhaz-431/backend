// src/modules/medicine/medicine.constant.ts

export const MedicineSearchableFields = [
  "name",          // medicine এর নাম
  "description",   // medicine এর বিবরণ
  "price",         // দাম অনুযায়ী search
  "stock",         // stock অনুযায়ী filter করা যেতে পারে
  "categoryId",    // category অনুযায়ী filter
  "sellerId"       // seller অনুযায়ী filter
];