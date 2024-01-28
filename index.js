import express from "express";
import cors from "cors";
import colors from "colors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// App
const app = express();

// Middlewires
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/user", userRoutes);
// Homepage
app.get("/", (req, res) => {
  res.send("server is running");
});

// server
const port = 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`.bgWhite.green.bold);
  connectDB();
});
