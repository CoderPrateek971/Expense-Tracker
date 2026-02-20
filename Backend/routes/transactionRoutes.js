const express = require("express");
const router = express.Router();

const {
  getTransactions,
  addTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

router.get("/transactions", getTransactions);
router.post("/transactions", addTransaction);
router.delete("/transactions/:id", deleteTransaction);

module.exports = router;