import { Request, RequestHandler, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProducts: RequestHandler = async (req, res): Promise<void> => {
  try {
    const search = req.query.search?.toString();
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search,
        },
      },
      orderBy: {
        productId: "asc",
      },
    });
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
    const newProduct = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });

    res.status(201).json(newProduct);
  } catch (error) {
    console.log("Error From Create Product controller", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
