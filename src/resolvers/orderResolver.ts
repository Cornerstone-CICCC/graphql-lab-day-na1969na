import { orderController } from "../controllers/order.controller";

export const orderResolver = {
  Query: {
    orders: async () => await orderController.getOrders(),
    getOrderById: async (_: any, { id }: { id: string }) =>
      await orderController.getOrderById(id),
  },
  Mutation: {
    addOrder: async (_: any, { productId, customerId }: { productId: string; customerId: string }) =>
      await orderController.createOrder(productId, customerId),
    editOrder: async (_: any, { id, productId, customerId }: any) =>
      await orderController.updateOrder(id, { productId, customerId }),
    removeOrder: async (_: any, { id }: { id: string }) =>
      (await orderController.deleteOrder(id)) != null,
  },
};
