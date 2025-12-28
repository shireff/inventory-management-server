"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Users_1 = require("../models/Users");
const Products_1 = require("../models/Products");
const Sales_1 = require("../models/Sales");
const Purchases_1 = require("../models/Purchases");
const Expenses_1 = require("../models/Expenses");
const Summaries_1 = require("../models/Summaries");
dotenv_1.default.config();
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined");
        }
        yield mongoose_1.default.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB for seeding");
        // Clear existing data
        yield Users_1.Users.deleteMany({});
        yield Products_1.Products.deleteMany({});
        yield Sales_1.Sales.deleteMany({});
        yield Purchases_1.Purchases.deleteMany({});
        yield Expenses_1.Expenses.deleteMany({});
        yield Summaries_1.SalesSummary.deleteMany({});
        yield Summaries_1.PurchaseSummary.deleteMany({});
        yield Summaries_1.ExpenseSummary.deleteMany({});
        yield Summaries_1.ExpenseByCategory.deleteMany({});
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
        yield Users_1.Users.insertMany(users);
        console.log("Seeded Users");
        yield Products_1.Products.insertMany(products);
        console.log("Seeded Products");
        yield Sales_1.Sales.insertMany(sales);
        console.log("Seeded Sales");
        yield Purchases_1.Purchases.insertMany(purchases);
        console.log("Seeded Purchases");
        yield Expenses_1.Expenses.insertMany(expenses);
        console.log("Seeded Expenses");
        yield Summaries_1.SalesSummary.insertMany(salesSummary);
        console.log("Seeded SalesSummary");
        yield Summaries_1.PurchaseSummary.insertMany(purchaseSummary);
        console.log("Seeded PurchaseSummary");
        yield Summaries_1.ExpenseSummary.insertMany(expenseSummary);
        console.log("Seeded ExpenseSummary");
        yield Summaries_1.ExpenseByCategory.insertMany(expenseByCategory);
        console.log("Seeded ExpenseByCategory");
        console.log("Seeding completed successfully!");
    }
    catch (error) {
        console.error("Seeding failed:", error);
    }
    finally {
        yield mongoose_1.default.disconnect();
    }
});
seed();
