const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema(
  {
    collect_id: String,
    school_id:{
      type: String,
      default:"Not Available"  },
    gateway: String,
    order_amount: Number,
    transaction_amount: Number,
    status: String,
    custom_order_id: String,
    bank_reference: String,
    payment_method: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
