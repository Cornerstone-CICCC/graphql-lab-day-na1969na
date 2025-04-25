import mongoose, { Schema, Document } from "mongoose";

export interface ICustomer extends Document {
  firstName: string;
  lastName: string;
  email: string;
}

const customerSchema: Schema<ICustomer> = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Customer = mongoose.model<ICustomer>("Customer", customerSchema);

export default Customer;
