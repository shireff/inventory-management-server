import mongoose, { Schema } from "mongoose";

export interface ISalesSummary {
  _id: string;
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: Date;
}

const SalesSummarySchema = new Schema<ISalesSummary>({
  _id: { type: String, required: true },
  salesSummaryId: { type: String, required: true },
  totalValue: { type: Number, required: true },
  changePercentage: { type: Number },
  date: { type: Date, required: true },
});

export const SalesSummary = mongoose.model<ISalesSummary>(
  "SalesSummary",
  SalesSummarySchema
);

export interface IPurchaseSummary {
  _id: string;
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number;
  date: Date;
}

const PurchaseSummarySchema = new Schema<IPurchaseSummary>({
  _id: { type: String, required: true },
  purchaseSummaryId: { type: String, required: true },
  totalPurchased: { type: Number, required: true },
  changePercentage: { type: Number },
  date: { type: Date, required: true },
});

export const PurchaseSummary = mongoose.model<IPurchaseSummary>(
  "PurchaseSummary",
  PurchaseSummarySchema
);

export interface IExpenseSummary {
  _id: string;
  expenseSummaryId: string;
  totalExpenses: number;
  date: Date;
}

const ExpenseSummarySchema = new Schema<IExpenseSummary>({
  _id: { type: String, required: true },
  expenseSummaryId: { type: String, required: true },
  totalExpenses: { type: Number, required: true },
  date: { type: Date, required: true },
});

export const ExpenseSummary = mongoose.model<IExpenseSummary>(
  "ExpenseSummary",
  ExpenseSummarySchema
);

export interface IExpenseByCategory {
  _id: string;
  expenseByCategoryId: string;
  expenseSummaryId: string;
  category: string;
  amount: number;
  date: Date;
}

const ExpenseByCategorySchema = new Schema<IExpenseByCategory>({
  _id: { type: String, required: true },
  expenseByCategoryId: { type: String, required: true },
  expenseSummaryId: { type: String, required: true, ref: "ExpenseSummary" },
  category: { type: String, required: true },
  amount: { type: Number, required: true }, 
  date: { type: Date, required: true },
});

export const ExpenseByCategory = mongoose.model<IExpenseByCategory>(
  "ExpenseByCategory",
  ExpenseByCategorySchema
);
