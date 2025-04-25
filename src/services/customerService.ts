import Customer from "../models/customer.model";

export const customerService = {
  getAllCustomers: async () => {
    return await Customer.find();
  },
  
  getCustomerById: async (id: string) => {
    return await Customer.findById(id);
  },

  createCustomer: async (data: { firstName: string; lastName: string; email: string }) => {
    const customer = new Customer(data);
    return await customer.save();
  },

  updateCustomer: async (
    id: string,
    data: Partial<{ firstName: string; lastName: string; email: string }>
  ) => {
    return await Customer.findByIdAndUpdate(id, data, { new: true });
  },

  deleteCustomer: async (id: string) => {
    return await Customer.findByIdAndDelete(id);
  },
};