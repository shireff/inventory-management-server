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
exports.createProduct = exports.getProducts = void 0;
const Products_1 = require("../models/Products");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const search = (_a = req.query.search) === null || _a === void 0 ? void 0 : _a.toString();
        const products = yield Products_1.Products.find({
            name: { $regex: search || "", $options: "i" },
        }).sort({ productId: 1 });
        if (products.length === 0) {
            res.status(404).json({ error: "No products found" });
            return;
        }
        res.status(200).json(products);
    }
    catch (error) {
        console.log("Error From Get Products controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getProducts = getProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId, name, price, rating, stockQuantity } = req.body;
        const missingFields = [];
        if (!productId)
            missingFields.push("Product ID");
        if (!name)
            missingFields.push("Product name");
        if (!price)
            missingFields.push("Product price");
        if (!rating)
            missingFields.push("Product rating");
        if (!stockQuantity)
            missingFields.push("Stock quantity");
        if (missingFields.length > 0) {
            res
                .status(400)
                .json({ error: `Missing fields: ${missingFields.join(", ")}` });
            return;
        }
        const newProduct = new Products_1.Products({
            productId,
            name,
            price,
            rating,
            stockQuantity,
        });
        yield newProduct.save();
        res.status(201).json(newProduct);
    }
    catch (error) {
        console.log("Error From Create Product controller", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.createProduct = createProduct;
