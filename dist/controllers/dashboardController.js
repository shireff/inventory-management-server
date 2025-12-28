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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDashboardMetrics = void 0;
const Products_1 = require("../models/Products");
const Summaries_1 = require("../models/Summaries");
const getDashboardMetrics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const popularProducts = yield Products_1.Products.find()
            .sort({ stockQuantity: -1 })
            .limit(15);
        const salesSummary = yield Summaries_1.SalesSummary.find().sort({ date: -1 }).limit(5);
        const purchaseSummary = yield Summaries_1.PurchaseSummary.find()
            .sort({ date: -1 })
            .limit(5);
        const expenseSummary = yield Summaries_1.ExpenseSummary.find()
            .sort({ date: -1 })
            .limit(5);
        const expenseByCategorySummaryRaw = yield Summaries_1.ExpenseByCategory.find()
            .sort({ date: -1 })
            .limit(5);
        const expenseByCategorySummary = expenseByCategorySummaryRaw.map((item) => (Object.assign(Object.assign({}, item.toObject()), { amount: item.amount.toString() })));
        res.status(200).json({
            popularProducts,
            salesSummary,
            purchaseSummary,
            expenseSummary,
            expenseByCategorySummary,
        });
    }
    catch (error) {
        console.log("Error From Get dashboard metrics controller", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getDashboardMetrics = getDashboardMetrics;
