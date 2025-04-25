import { productController } from "../controllers/product.controller";

export const productResolver = {
  Query: {
    products: async () => await productController.getProducts(),
    getProductById: async (_: any, { id }: { id: string }) =>
      await productController.getProductById(id),
  },
  Mutation: {
    addProduct: async (_: any, args: { productName: string; productPrice: number }) =>
      await productController.createProduct(args),
    editProduct: async (_: any, { id, ...data }: any) =>
      await productController.updateProduct(id, data),
    removeProduct: async (_: any, { id }: { id: string }) =>
      (await productController.deleteProduct(id)) != null,
  },
};