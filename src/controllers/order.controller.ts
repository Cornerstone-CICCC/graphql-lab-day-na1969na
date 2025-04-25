import { orderService } from '../services/orderService';

export const orderController = {
  getOrders: async () => {
    return await orderService.getAllOrders();
  },

  createOrder: async (productId: string, customerId: string) => {
    return await orderService.createOrder(productId, customerId);
  },

  getOrderById: async (id: string) => {
    return await orderService.getOrderById(id);
  },

  updateOrder: async (
    id: string,
    data: Partial<{ productId: string; customerId: string }>
  ) => {
    return await orderService.updateOrder(id, data);
  },

  deleteOrder: async (id: string) => {
    return await orderService.deleteOrder(id);
  },
};