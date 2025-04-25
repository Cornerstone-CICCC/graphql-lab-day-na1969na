import Customer from "../models/customer.model";
import Order from "../models/order.model";
import Product from "../models/product.model";

export const orderService = {
  getAllOrders: async () => {
    return await Order.find().populate("productId").populate("customerId");
  },

  createOrder: async (productId: string, customerId: string) => {
    const productExists = await Product.findById(productId);
    const customerExists = await Customer.findById(customerId);

    if (!productExists || !customerExists) {
      throw new Error("Invalid product or customer ID");
    }

    const order = new Order({ productId, customerId });
    return await order.save();
  },

  getOrderById: async (id: string) => {
    return await Order.findById(id).populate("productId").populate("customerId");
  },

  updateOrder: async (
    id: string,
    data: Partial<{ productId: string; customerId: string }>
  ) => {
    return await Order.findByIdAndUpdate(id, data, { new: true })
      .populate("productId")
      .populate("customerId");
  },

  deleteOrder: async (id: string) => {
    return await Order.findByIdAndDelete(id);
  },
};
