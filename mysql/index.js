import express from "express";
import mysqlRoutes from "./routes/mysqlroute.js";
import cors from "cors";
import db from "./config/database.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/mysql", mysqlRoutes);

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.listen(3306, () => {
  console.log("Connection succeed!");
});
