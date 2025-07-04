"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const expenseRoutes_1 = __importDefault(require("./routes/expenseRoutes"));
const swagger_1 = __importDefault(require("./swagger"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(helmet_1.default.crossOriginResourcePolicy({
    policy: "cross-origin",
}));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
// app.use(
//   cors({
//     origin: [
//       "https://inventory-management-client-bay.vercel.app",
//       "https://inventory-management-server-production.up.railway.app",
//       "http://localhost:3000",
//     ],
//     methods: "GET,POST,PUT,DELETE,OPTIONS",
//     allowedHeaders: "Content-Type,Authorization",
//     credentials: true,
//   })
// );
app.use("/dashboard", dashboardRoutes_1.default);
app.use("/products", productsRoutes_1.default);
app.use("/users", userRoutes_1.default);
app.use("/expenses", expenseRoutes_1.default);
(0, swagger_1.default)(app);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}`));
