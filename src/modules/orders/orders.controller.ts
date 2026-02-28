import { Request, Response } from "express";
import { OrderService } from "./orders.service";

export const OrderController = {
  createOrder: async (req: Request, res: Response) => {
    try {
      const customerId = req.user?.id; // assuming req.user is set by auth middleware
      const order = await OrderService.createOrderInDB(req.body, customerId!);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  },

  getAllOrders: async (req: Request, res: Response) => {
    try {
      const customerId = req.user?.id;
      const orders = await OrderService.getAllOrdersByCustomerDB(customerId!);
      res.status(200).json(orders);
    } catch (error) {
      res.status(400).json({ message: (error as Error).message });
    }
  },

  getSingleOrder: async (req: Request, res: Response) => {
  try {
    const customerId = req.user?.id;
    const orderId = req.params.id;

    const order = await OrderService.getSingleOrderFromDB(orderId as string, customerId!);

    res.status(200).json(order);
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
},


};