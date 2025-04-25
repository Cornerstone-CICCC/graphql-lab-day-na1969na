import { productService } from '../services/productService';

export const productController = {
  getProducts: async () => {
    return await productService.getAllProducts();
  },
  
  createProduct: async (data: { productName: string; productPrice: number }) => {
    return await productService.createProduct(data);
  },

  getProductById: async (id: string) => {
    return await productService.getProductById(id);
  },

  updateProduct: async (
    id: string,
    data: Partial<{ productName: string; productPrice: number }>
  ) => {
    return await productService.updateProduct(id, data);
  },

  deleteProduct: async (id: string) => {
    return await productService.deleteProduct(id);
  },
};