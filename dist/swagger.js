"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Inventory ERP API",
            version: "1.0.0",
            description: "API documentation for the Inventory ERP system",
        },
        components: {
            schemas: {
                Users: {
                    type: "object",
                    properties: {
                        userId: { type: "string", example: "u123" },
                        name: { type: "string", example: "John Doe" },
                        email: { type: "string", example: "john@example.com" },
                    },
                },
                Products: {
                    type: "object",
                    properties: {
                        productId: { type: "string", example: "p123" },
                        name: { type: "string", example: "Widget" },
                        price: { type: "number", example: 99.99 },
                        rating: { type: "number", nullable: true, example: 4.5 },
                        stockQuantity: { type: "integer", example: 50 },
                    },
                },
                Sales: {
                    type: "object",
                    properties: {
                        saleId: { type: "string", example: "s123" },
                        productId: { type: "string", example: "p123" },
                        timestamp: {
                            type: "string",
                            format: "date-time",
                            example: "2025-01-24T12:34:56Z",
                        },
                        quantity: { type: "integer", example: 10 },
                        unitPrice: { type: "number", example: 9.99 },
                        totalAmount: { type: "number", example: 99.9 },
                    },
                },
                Purchases: {
                    type: "object",
                    properties: {
                        purchaseId: { type: "string", example: "pr123" },
                        productId: { type: "string", example: "p123" },
                        timestamp: {
                            type: "string",
                            format: "date-time",
                            example: "2025-01-24T12:34:56Z",
                        },
                        quantity: { type: "integer", example: 5 },
                        unitCost: { type: "number", example: 20.5 },
                        totalCost: { type: "number", example: 102.5 },
                    },
                },
                Expenses: {
                    type: "object",
                    properties: {
                        expenseId: { type: "string", example: "e123" },
                        category: { type: "string", example: "Office Supplies" },
                        amount: { type: "number", example: 150.5 },
                        timestamp: {
                            type: "string",
                            format: "date-time",
                            example: "2025-01-24T12:34:56Z",
                        },
                    },
                },
                SalesSummary: {
                    type: "object",
                    properties: {
                        salesSummaryId: { type: "string", example: "ss123" },
                        totalValue: { type: "number", example: 5000 },
                        changePercentage: { type: "number", nullable: true, example: 5.5 },
                        date: {
                            type: "string",
                            format: "date",
                            example: "2025-01-24",
                        },
                    },
                },
                PurchaseSummary: {
                    type: "object",
                    properties: {
                        purchaseSummaryId: { type: "string", example: "ps123" },
                        totalPurchased: { type: "number", example: 3000 },
                        changePercentage: { type: "number", nullable: true, example: -2.5 },
                        date: {
                            type: "string",
                            format: "date",
                            example: "2025-01-24",
                        },
                    },
                },
                ExpenseSummary: {
                    type: "object",
                    properties: {
                        expenseSummaryId: { type: "string", example: "es123" },
                        totalExpenses: { type: "number", example: 2000 },
                        date: {
                            type: "string",
                            format: "date",
                            example: "2025-01-24",
                        },
                    },
                },
                ExpenseByCategory: {
                    type: "object",
                    properties: {
                        expenseByCategoryId: { type: "string", example: "ebc123" },
                        category: { type: "string", example: "Marketing" },
                        amount: { type: "number", example: 1500 },
                        date: {
                            type: "string",
                            format: "date",
                            example: "2025-01-24",
                        },
                    },
                },
            },
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3001}`,
                description: "Development Server",
            },
        ],
    },
    apis: ["./src/routes/*.ts", "./src/controllers/*.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const setupSwagger = (app) => {
    app.get("/api-docs.json", (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
    });
    app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
    options.definition.servers.forEach((server) => console.log(`Swagger setup complete for server: ${server.url}/api-docs`));
};
exports.default = setupSwagger;
