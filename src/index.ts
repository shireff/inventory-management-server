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
import { VercelRequest, VercelResponse } from "@vercel/node";

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

app.use("/dashboard", dashboardRoutes);
app.use("/products", productsRoutes);
app.use("/users", usersRoutes);
app.use("/expenses", expenseRoutes);

setupSwagger(app);
const PORT = process.env.PORT || 3001;

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
app.listen(PORT, () =>
  console.log(`Server running on : http://localhost:${PORT}`)
);
