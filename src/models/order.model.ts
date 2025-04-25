import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  productId: mongoose.Schema.Types.ObjectId;
  customerId: mongoose.Schema.Types.ObjectId;
}

const orderSchema: Schema<IOrder> = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Order = mongoose.model<IOrder>("Order", orderSchema);

export default Order;