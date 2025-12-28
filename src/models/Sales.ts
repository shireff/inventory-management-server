import mongoose, { Schema } from "mongoose";

export interface ISale {
  _id: string;
  saleId: string;
  productId: string;
  timestamp: Date;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
}

const SalesSchema = new Schema<ISale>({
  _id: { type: String, required: true },
  saleId: { type: String, required: true },
  productId: { type: String, required: true, ref: "Products" },
  timestamp: { type: Date, required: true },
  quantity: { type: Number, required: true },
  unitPrice: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
});

export const Sales = mongoose.model<ISale>("Sales", SalesSchema);
