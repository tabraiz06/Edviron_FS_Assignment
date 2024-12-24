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

router.get("/", getTransactions);
router.get("/:school_id", getTransactionsBySchool);
router.get("/check-status/:custom_order_id", checkStatus);
router.post("/update-status", updateTransactionStatus);
router.post("/create-payment", createTransaction);
router.post("/webhook", webhookUpdate);

module.exports = router;
