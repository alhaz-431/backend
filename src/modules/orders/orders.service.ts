import { prisma } from "../../lib/prisma";

// Payload type for creating an order
interface CreateOrderPayload {
  items: { medicineId: string; quantity: number }[];
  shippingAddress: string;
}

const createOrderInDB = async (payload: CreateOrderPayload, customerId: string) => {
  // 1️⃣ Check if customer exists
  const customer = await prisma.user.findUnique({
    where: { id: customerId },
  });
  if (!customer) throw new Error("Customer not found");

  // 2️⃣ Calculate total price & prepare order items
  let totalPrice = 0;
  const orderItemsData: any[] = [];

  for (const item of payload.items) {
    const medicine = await prisma.medicines.findUnique({
      where: { id: item.medicineId },
    });

    if (!medicine) throw new Error(`Medicine ${item.medicineId} not found`);
    if (medicine.stock < item.quantity)
      throw new Error(`${medicine.name} stock is insufficient`);

    totalPrice += medicine.price * item.quantity;

    orderItemsData.push({
      medicineId: medicine.id,
      quantity: item.quantity,
      price: medicine.price,
    });
  }

  // 3️⃣ Create order
  const order = await prisma.orders.create({
    data: {
      customerId,
      shippingAddress: payload.shippingAddress,
      totalPrice,
      items: {
        create: orderItemsData,
      },
    },
    include: { items: true },
  });

  // 4️⃣ Reduce stock
  for (const item of payload.items) {
    await prisma.medicines.update({
      where: { id: item.medicineId },
      data: { stock: { decrement: item.quantity } },
    });
  }

  return order;
};

// Optional: fetch all orders of a customer
const getAllOrdersByCustomerDB = async (customerId: string) => {
  const orders = await prisma.orders.findMany({
    where: { customerId },
    include: { items: { include: { medicine: true } } },
    orderBy: { createdAt: "desc" },
  });
  return orders;
};


const getSingleOrderFromDB = async (orderId: string, customerId: string) => {
  const order = await prisma.orders.findFirst({
    where: {
      id: orderId,
      customerId: customerId,
    },
    include: {
      items: true,
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  return order;
};

export const OrderService = {
  createOrderInDB,
  getAllOrdersByCustomerDB,
   getSingleOrderFromDB
};