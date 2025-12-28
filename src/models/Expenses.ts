import mongoose, { Schema } from "mongoose";

export interface IExpense {
  _id: string;
  expenseId: string;
  category: string;
  amount: number;
  timestamp: Date;
}

const ExpensesSchema = new Schema<IExpense>({
  _id: { type: String, required: true },
  expenseId: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, required: true },
});

export const Expenses = mongoose.model<IExpense>("Expenses", ExpensesSchema);
