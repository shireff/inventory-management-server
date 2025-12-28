import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dashboardRoutes from "./routes/dashboardRoutes";
import productsRoutes from "./routes/productsRoutes";
import usersRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";
import setupSwagger from "./swagger";
import mongoose from "mongoose";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  helmet.crossOriginResourcePolicy({
    policy: "cross-origin",
  })
);
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

setupSwagger(app);

app.use("/dashboard", dashboardRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/expenses", expenseRoutes);


const PORT = process.env.PORT || 3001;


const startServer = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL must be defined");
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB via Mongoose");

    app.listen(PORT, () =>
      console.log(`Server running on : http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
