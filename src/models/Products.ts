import mongoose, { Schema } from "mongoose";

export interface IProduct {
  _id: string;
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

const ProductsSchema = new Schema<IProduct>({
  _id: { type: String, required: true },
  productId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number },
  stockQuantity: { type: Number, required: true },
});

export const Products = mongoose.model<IProduct>("Products", ProductsSchema);
