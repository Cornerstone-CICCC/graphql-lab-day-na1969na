import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  productName: string;
  productPrice: number;
}

const productSchema: Schema<IProduct> = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Product = mongoose.model<IProduct>("Product", productSchema);

export default Product;
