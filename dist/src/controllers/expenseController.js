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
exports.getExpenseCategorySummaryRow = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getExpenseCategorySummaryRow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expenseByCategorySummaryRow = yield prisma.expenseByCategory.findMany({
            orderBy: {
                date: "desc",
            },
        });
        const expenseByCategorySummary = expenseByCategorySummaryRow.map((item) => (Object.assign(Object.assign({}, item), { amount: item.amount.toString() })));
        res.status(200).json(expenseByCategorySummary);
    }
    catch (error) {
        console.log("Error getExpenseCategorySummaryRow controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getExpenseCategorySummaryRow = getExpenseCategorySummaryRow;
