import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import authRouter from "./routes/authRoutes.js";
import transactionRouter from "./routes/transactionRoutes.js";
import profileRouter from "./routes/profileRoute.js";
import notFoundMiddleware from "./middlewares/not-found.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/transaction", transactionRouter);
app.use("/api/v1/profile", profileRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFoundMiddleware);

const port = 5000;

app.listen(port, () => {
  console.log(`Bank listening at http://localhost:${port}`);
});
