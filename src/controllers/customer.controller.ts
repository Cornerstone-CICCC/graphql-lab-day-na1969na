import { customerService } from '../services/customerService';

export const customerController = {
  getCustomers: async () => {
    return await customerService.getAllCustomers();
  },

  createCustomer: async (data: { firstName: string; lastName: string; email: string }) => {
    return await customerService.createCustomer(data);
  },

  getCustomerById: async (id: string) => {
    return await customerService.getCustomerById(id);
  },

  updateCustomer: async (
    id: string,
    data: Partial<{ firstName: string; lastName: string; email: string }>
  ) => {
    return await customerService.updateCustomer(id, data);
  },

  deleteCustomer: async (id: string) => {
    return await customerService.deleteCustomer(id);
  },
};