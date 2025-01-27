"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   - name: Dashboard
 *     description: API for retrieving dashboard metrics
 */
/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Retrieve dashboard metrics
 *     description: Fetch popular products, sales summary, purchase summary, and expense summary for the dashboard.
 *     tags:
 *       - Dashboard
 *     responses:
 *       200:
 *         description: Successfully retrieved metrics
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 popularProducts:
 *                   type: array
 *                   items:
 *                     type: object
 *                 salesSummary:
 *                   type: array
 *                   items:
 *                     type: object
 *                 purchaseSummary:
 *                   type: array
 *                   items:
 *                     type: object
 *                 expenseSummary:
 *                   type: array
 *                   items:
 *                     type: object
 *       500:
 *         description: Internal Server Error
 */
router.get("/", dashboardController_1.getDashboardMetrics);
exports.default = router;
