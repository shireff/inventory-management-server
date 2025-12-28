import { Request, Response } from "express";
import { Products } from "../models/Products";
import {
  SalesSummary,
  PurchaseSummary,
  ExpenseSummary,
  ExpenseByCategory,
} from "../models/Summaries";

export const getDashboardMetrics = async (req: Request, res: Response) => {
  try {
    const popularProducts = await Products.find()
      .sort({ stockQuantity: -1 })
      .limit(15);

    const salesSummary = await SalesSummary.find().sort({ date: -1 }).limit(5);

    const purchaseSummary = await PurchaseSummary.find()
      .sort({ date: -1 })
      .limit(5);

    const expenseSummary = await ExpenseSummary.find()
      .sort({ date: -1 })
      .limit(5);

    const expenseByCategorySummaryRaw = await ExpenseByCategory.find()
      .sort({ date: -1 })
      .limit(5);

    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item) => ({
        ...item.toObject(),
        amount: item.amount.toString(),
      })
    );

    res.status(200).json({
      popularProducts,
      salesSummary,
      purchaseSummary,
      expenseSummary,
      expenseByCategorySummary,
    });
  } catch (error) {
    console.log("Error From Get dashboard metrics controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
