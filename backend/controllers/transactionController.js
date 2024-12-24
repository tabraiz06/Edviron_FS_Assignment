const Transaction = require("../models/Transaction");
const { createPayment } = require("../utils/paymentService");

// Fetch All Transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Fetch Transactions by School ID
const getTransactionsBySchool = async (req, res) => {
  const { school_id } = req.params;
  try {
    const transactions = await Transaction.find({ school_id });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Check Transaction Status
const checkStatus = async (req, res) => {
  const { custom_order_id } = req.params;
  try {
    const transaction = await Transaction.findOne({ custom_order_id });
    res.json(transaction ? transaction.status : "Not Found");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Manual Transaction Status Update
const updateTransactionStatus = async (req, res) => {
  const { custom_order_id, status } = req.body;
  try {
    const transaction = await Transaction.findOneAndUpdate(
      { custom_order_id },
      { status },
      { new: true }
    );
    if (transaction) {
      res.json({ message: "Transaction status updated", transaction });
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Create Payment Request
const createTransaction = async (req, res) => {
  try {
    const response = await createPayment(req.body);
    res.json(response);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Payment creation failed", error: error.message });
  }
};

// Webhook for Status Updates
const webhookUpdate = async (req, res) => {
  const { order_info } = req.body;
  const { order_id, status } = order_info;
  try {
    const transaction = await Transaction.findOneAndUpdate(
      { collect_id: order_id },
      { status },
      { new: true }
    );
    if (transaction) {
      res.json({
        message: "Transaction status updated via webhook",
        transaction,
      });
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Webhook update failed", error: error.message });
  }
};

module.exports = {
  getTransactions,
  getTransactionsBySchool,
  checkStatus,
  updateTransactionStatus,
  createTransaction,
  webhookUpdate,
};
