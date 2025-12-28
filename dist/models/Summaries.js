"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseByCategory = exports.ExpenseSummary = exports.PurchaseSummary = exports.SalesSummary = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const SalesSummarySchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    salesSummaryId: { type: String, required: true },
    totalValue: { type: Number, required: true },
    changePercentage: { type: Number },
    date: { type: Date, required: true },
});
exports.SalesSummary = mongoose_1.default.model("SalesSummary", SalesSummarySchema);
const PurchaseSummarySchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    purchaseSummaryId: { type: String, required: true },
    totalPurchased: { type: Number, required: true },
    changePercentage: { type: Number },
    date: { type: Date, required: true },
});
exports.PurchaseSummary = mongoose_1.default.model("PurchaseSummary", PurchaseSummarySchema);
const ExpenseSummarySchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    expenseSummaryId: { type: String, required: true },
    totalExpenses: { type: Number, required: true },
    date: { type: Date, required: true },
});
exports.ExpenseSummary = mongoose_1.default.model("ExpenseSummary", ExpenseSummarySchema);
const ExpenseByCategorySchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    expenseByCategoryId: { type: String, required: true },
    expenseSummaryId: { type: String, required: true, ref: "ExpenseSummary" },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
});
exports.ExpenseByCategory = mongoose_1.default.model("ExpenseByCategory", ExpenseByCategorySchema);
