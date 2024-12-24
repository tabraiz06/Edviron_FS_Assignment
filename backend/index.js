const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");
const AuthRoutes = require("./routes/authRoutes");
const importCSV = require("./utils/importCSV");
const cors = require('cors')

dotenv.config();
connectDB();

const app = express();
app.use(cors())
app.use(express.json());
// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/user", AuthRoutes);
app.use("/api/transactions", transactionRoutes);

// CSV Import - Run once to import data
importCSV("./data/test.csv");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
