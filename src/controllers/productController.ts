import { Request, RequestHandler, Response } from "express";
import { Products } from "../models/Products";

export const getProducts: RequestHandler = async (req, res): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await Products.find({
      name: { $regex: search || "", $options: "i" },
    }).sort({ productId: 1 });

    if (products.length === 0) {
      res.status(404).json({ error: "No products found" });
      return;
    }

    res.status(200).json(products);
  } catch (error) {
    console.log("Error From Get Products controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createProduct: RequestHandler = async (
  req,
  res
): Promise<void> => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const missingFields = [];
    if (!productId) missingFields.push("Product ID");
    if (!name) missingFields.push("Product name");
    if (!price) missingFields.push("Product price");
    if (!rating) missingFields.push("Product rating");
    if (!stockQuantity) missingFields.push("Stock quantity");

    if (missingFields.length > 0) {
      res
        .status(400)
        .json({ error: `Missing fields: ${missingFields.join(", ")}` });
      return;
    }

    const newProduct = new Products({
      productId,
      name,
      price,
      rating,
      stockQuantity,
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.log("Error From Create Product controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
