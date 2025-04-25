import Product from "../models/product.model";

export const productService = {
  getAllProducts: async () => {
    return await Product.find();
  },
  
  getProductById: async (id: string) => {
    return await Product.findById(id);
  },

  createProduct: async (data: { productName: string; productPrice: number }) => {
    const product = new Product(data);
    return await product.save();
  },

  updateProduct: async (
    id: string,
    data: Partial<{ productName: string; productPrice: number }>
  ) => {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  },

  deleteProduct: async (id: string) => {
    return await Product.findByIdAndDelete(id);
  },
};
