import express from "express";
import dotenv from "dotenv";
import mailRoutes from "./routes/mailRoutes.js";
import configDetails from "./config/mailConfig.js";
const app = express();

dotenv.config();
configDetails();
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.use("/api/", mailRoutes);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
