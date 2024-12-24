const csv = require("csv-parser");
const fs = require("fs");
const Transaction = require("../models/Transaction");

const importCSV = async(filePath) => {
  await Transaction.deleteMany(); // Clear existing data
  fs.createReadStream(filePath)
  
    .pipe(csv())
    .on("data", async (row) => {
      const transaction = new Transaction(row);
      await transaction.save();
    })
    .on("end", () => {
      console.log("CSV file successfully imported");
    });
};

module.exports = importCSV;
