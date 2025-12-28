import mongoose, { Schema } from "mongoose";

export interface IPurchase {
  _id: string;
  purchaseId: string;
  productId: string;
  timestamp: Date;
  quantity: number;
  unitCost: number;
  totalCost: number;
}

const PurchasesSchema = new Schema<IPurchase>({
  _id: { type: String, required: true },
  purchaseId: { type: String, required: true },
  productId: { type: String, required: true, ref: "Products" },
  timestamp: { type: Date, required: true },
  quantity: { type: Number, required: true },
  unitCost: { type: Number, required: true },
  totalCost: { type: Number, required: true },
});

export const Purchases = mongoose.model<IPurchase>("Purchases", PurchasesSchema);
