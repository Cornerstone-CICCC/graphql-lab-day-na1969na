import { customerController } from "../controllers/customer.controller";

export const customerResolver = {
  Query: {
    customers: async () => await customerController.getCustomers(),
    getCustomerById: async (_: any, { id }: { id: string }) =>
      await customerController.getCustomerById(id),
  },
  Mutation: {
    addCustomer: async (_: any, args: { firstName: string; lastName: string; email: string }) =>
      await customerController.createCustomer(args),
    editCustomer: async (_: any, { id, ...data }: any) =>
      await customerController.updateCustomer(id, data),
    removeCustomer: async (_: any, { id }: { id: string }) =>
      (await customerController.deleteCustomer(id)) != null,
  },
};
