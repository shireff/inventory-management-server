import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const getExpenseCategorySummaryRow = async (
  req: Request,
  res: Response
) => {
  try {
    const expenseByCategorySummaryRow = await prisma.expenseByCategory.findMany(
      {
        orderBy: {
          date: "desc",
        },
      }
    );

    const expenseByCategorySummary = expenseByCategorySummaryRow.map(
      (item) => ({
        ...item,
        amount: item.amount.toString(),
      })
    );

    res.status(200).json(expenseByCategorySummary);
  } catch (error) {
    console.log("Error getExpenseCategorySummaryRow controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
