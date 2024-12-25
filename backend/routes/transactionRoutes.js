const express = require("express");
const router = express.Router();
const {
  getTransactions,
  getTransactionsBySchool,
  checkStatus,
  updateTransactionStatus,
  createTransaction,
  webhookUpdate,
} = require("../controllers/transactionController");
const { protect } = require("../middleware/authMiddleware");

router.get("/",protect, getTransactions);
router.get("/:school_id",protect, getTransactionsBySchool);
router.get("/check-status/:custom_order_id",protect, checkStatus);
router.post("/update-status", protect, updateTransactionStatus);
router.post("/create-payment", protect, createTransaction);
router.post("/webhook", protect, webhookUpdate);

module.exports = router;
