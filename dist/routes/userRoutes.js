"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   - name: Users
 *     description: API for managing users
 */
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Fetch all users available in the system.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                     description: The user ID.
 *                     example: "user-123"
 *                   name:
 *                     type: string
 *                     description: The name of the user.
 *                     example: "John Doe"
 *                   email:
 *                     type: string
 *                     description: The email of the user.
 *                     example: "johndoe@example.com"
 *
 *       500:
 *         description: Internal Server Error.
 */
router.get("/", usersController_1.getUsers);
exports.default = router;
