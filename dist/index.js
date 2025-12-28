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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const dashboardRoutes_1 = __importDefault(require("./routes/dashboardRoutes"));
const productsRoutes_1 = __importDefault(require("./routes/productsRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const expenseRoutes_1 = __importDefault(require("./routes/expenseRoutes"));
const swagger_1 = __importDefault(require("./swagger"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(helmet_1.default.crossOriginResourcePolicy({
    policy: "cross-origin",
}));
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
app.use("/dashboard", dashboardRoutes_1.default);
app.use("/products", productsRoutes_1.default);
app.use("/users", userRoutes_1.default);
app.use("/expenses", expenseRoutes_1.default);
(0, swagger_1.default)(app);
const PORT = process.env.PORT || 3001;
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL must be defined");
        }
        yield mongoose_1.default.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB via Mongoose");
        app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}`));
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
});
startServer();
