import { Request, Response } from "express";
import { ExpenseByCategory } from "../models/Summaries";

export const getExpenseCategorySummaryRow = async (
  req: Request,
  res: Response
) => {
  try {
    const expenseByCategorySummaryRow = await ExpenseByCategory.find().sort({
      date: -1,
    });

    const expenseByCategorySummary = expenseByCategorySummaryRow.map(
      (item) => ({
        ...item.toObject(),
        amount: item.amount.toString(),
      })
    );

    res.status(200).json(expenseByCategorySummary);
  } catch (error) {
    console.log("Error getExpenseCategorySummaryRow controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
