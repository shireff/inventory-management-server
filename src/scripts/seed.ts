import mongoose from "mongoose";
import dotenv from "dotenv";
import { Users } from "../models/Users";
import { Products } from "../models/Products";
import { Sales } from "../models/Sales";
import { Purchases } from "../models/Purchases";
import { Expenses } from "../models/Expenses";
import {
  SalesSummary,
  PurchaseSummary,
  ExpenseSummary,
  ExpenseByCategory,
} from "../models/Summaries";

dotenv.config();

const seed = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL is not defined");
    }

    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB for seeding");

    // Clear existing data
    await Users.deleteMany({});
    await Products.deleteMany({});
    await Sales.deleteMany({});
    await Purchases.deleteMany({});
    await Expenses.deleteMany({});
    await SalesSummary.deleteMany({});
    await PurchaseSummary.deleteMany({});
    await ExpenseSummary.deleteMany({});
    await ExpenseByCategory.deleteMany({});

    // Sample Data
    const users = [
      { _id: "66e992aa91a4512e0302b130", userId: "66e992aa91a4512e0302b130", name: "John Doe", email: "john@example.com" },
      { _id: "66e992aa91a4512e0302b131", userId: "66e992aa91a4512e0302b131", name: "Jane Smith", email: "jane@example.com" },
      { _id: "66e992aa91a4512e0302b132", userId: "66e992aa91a4512e0302b132", name: "Alice Johnson", email: "alice@example.com" },
    ];

    const products = [
      { _id: "66e992aa91a4512e0302b140", productId: "66e992aa91a4512e0302b140", name: "Laptop", price: 1200.50, rating: 4.5, stockQuantity: 50 },
      { _id: "66e992aa91a4512e0302b141", productId: "66e992aa91a4512e0302b141", name: "Smartphone", price: 800.00, rating: 4.8, stockQuantity: 100 },
      { _id: "66e992aa91a4512e0302b142", productId: "66e992aa91a4512e0302b142", name: "Headphones", price: 150.75, rating: 4.2, stockQuantity: 200 },
    ];

    const sales = [
      {
        _id: "66e992aa91a4512e0302b150",
        saleId: "66e992aa91a4512e0302b150",
        productId: "66e992aa91a4512e0302b140",
        timestamp: new Date("2024-01-15T10:00:00Z"),
        quantity: 2,
        unitPrice: 1200.50,
        totalAmount: 2401.00,
      },
      {
        _id: "66e992aa91a4512e0302b151",
        saleId: "66e992aa91a4512e0302b151",
        productId: "66e992aa91a4512e0302b141",
        timestamp: new Date("2024-01-16T14:30:00Z"),
        quantity: 1,
        unitPrice: 800.00,
        totalAmount: 800.00,
      },
    ];

    const purchases = [
      {
        _id: "66e992aa91a4512e0302b160",
        purchaseId: "66e992aa91a4512e0302b160",
        productId: "66e992aa91a4512e0302b140",
        timestamp: new Date("2024-01-10T09:00:00Z"),
        quantity: 10,
        unitCost: 1000.00,
        totalCost: 10000.00,
      },
    ];

    const expenses = [
      {
        _id: "66e992aa91a4512e0302b170",
        expenseId: "66e992aa91a4512e0302b170",
        category: "Office Supplies",
        amount: 50.00,
        timestamp: new Date("2024-01-20T11:00:00Z"),
      },
      {
        _id: "66e992aa91a4512e0302b171",
        expenseId: "66e992aa91a4512e0302b171",
        category: "Utilities",
        amount: 200.00,
        timestamp: new Date("2024-01-25T16:00:00Z"),
      },
    ];

    const salesSummary = [
      {
        _id: "66e992aa91a4512e0302b180",
        salesSummaryId: "66e992aa91a4512e0302b180",
        totalValue: 3201.00,
        changePercentage: 5.2,
        date: new Date("2024-01-01T00:00:00Z"),
      },
    ];

    const purchaseSummary = [
      {
        _id: "66e992aa91a4512e0302b190",
        purchaseSummaryId: "66e992aa91a4512e0302b190",
        totalPurchased: 10000.00,
        changePercentage: -2.0,
        date: new Date("2024-01-01T00:00:00Z"),
      },
    ];

    const expenseSummary = [
      {
        _id: "66e992aa91a4512e0302b200",
        expenseSummaryId: "66e992aa91a4512e0302b200",
        totalExpenses: 250.00,
        date: new Date("2024-01-01T00:00:00Z"),
      },
    ];

    const expenseByCategory = [
      {
        _id: "66e992aa91a4512e0302b210",
        expenseByCategoryId: "66e992aa91a4512e0302b210",
        expenseSummaryId: "66e992aa91a4512e0302b200",
        category: "Office Supplies",
        amount: 50.00,
        date: new Date("2024-01-01T00:00:00Z"),
      },
      {
        _id: "66e992aa91a4512e0302b211",
        expenseByCategoryId: "66e992aa91a4512e0302b211",
        expenseSummaryId: "66e992aa91a4512e0302b200",
        category: "Utilities",
        amount: 200.00,
        date: new Date("2024-01-01T00:00:00Z"),
      },
    ];

    // Insert Data
    await Users.insertMany(users);
    console.log("Seeded Users");

    await Products.insertMany(products);
    console.log("Seeded Products");

    await Sales.insertMany(sales);
    console.log("Seeded Sales");

    await Purchases.insertMany(purchases);
    console.log("Seeded Purchases");

    await Expenses.insertMany(expenses);
    console.log("Seeded Expenses");

    await SalesSummary.insertMany(salesSummary);
    console.log("Seeded SalesSummary");

    await PurchaseSummary.insertMany(purchaseSummary);
    console.log("Seeded PurchaseSummary");

    await ExpenseSummary.insertMany(expenseSummary);
    console.log("Seeded ExpenseSummary");

    await ExpenseByCategory.insertMany(expenseByCategory);
    console.log("Seeded ExpenseByCategory");

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Seeding failed:", error);
  } finally {
    await mongoose.disconnect();
  }
};

seed();
