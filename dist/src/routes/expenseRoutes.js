"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const expenseController_1 = require("../controllers/expenseController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   - name: Expense
 *     description: API for retrieving expense category summaries
 */
/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Retrieve expense category summary
 *     description: Fetch the summary of expenses categorized by their respective types, ordered by date.
 *     tags:
 *       - Expense
 *     responses:
 *       200:
 *         description: A list of expense categories with their amounts.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   expenseByCategoryId:
 *                     type: string
 *                     description: The expense category ID.
 *                     example: "expense-123"
 *                   expenseSummaryId:
 *                     type: string
 *                     description: The expense summary ID.
 *                     example: "expense-123"
 *                   category:
 *                     type: string
 *                     description: The name of the expense category.
 *                     example: "Office Supplies"
 *                   amount:
 *                     type: string
 *                     description: The total amount spent in this category, converted to string for precision.
 *                     example: "1500.00"
 *                   date:
 *                     type: string
 *                     format: date-time
 *                     description: The date the expense was recorded.
 *                     example: "2024-01-28T12:00:00Z"
 *       500:
 *         description: Internal Server Error.
 */
router.get("/", expenseController_1.getExpenseCategorySummaryRow);
exports.default = router;
