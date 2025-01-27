import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productController";

const router = Router();
/**
 * @swagger
 * tags:
 *   - name: Products
 *     description: API for managing products
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of products
 *     description: Fetch all products available in the system.
 *     tags:
 *       - Products
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter products by name
 *     responses:
 *       200:
 *         description: A list of products.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   productId:
 *                     type: string
 *                   name:
 *                     type: string
 *                   price:
 *                     type: number
 *                   rating:
 *                     type: number
 *                   stockQuantity:
 *                     type: number
 *       404:
 *         description: No products found.
 *       500:
 *         description: Internal Server Error.
 */
router.get("/", getProducts);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     description: Add a new product to the inventory.
 *     tags:
 *       - Products
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the product.
 *                 example: "New Product"
 *               price:
 *                 type: number
 *                 description: The price of the product.
 *                 example: 29.99
 *               stockQuantity:
 *                 type: number
 *                 description: The number of items in stock.
 *                 example: 100
 *     responses:
 *       201:
 *         description: Product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 price:
 *                   type: number
 *                 stockQuantity:
 *                   type: number
 *       400:
 *         description: Bad Request. Missing or invalid fields.
 *       500:
 *         description: Internal Server Error.
 */
router.post("/", createProduct);

export default router;
