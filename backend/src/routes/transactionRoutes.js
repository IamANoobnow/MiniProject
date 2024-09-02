const express = require('express');
const { addTransaction, getUserTransactions } = require('../controllers/transactionController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Add a new transaction (protected route)
router.post('/', authMiddleware, addTransaction);

// Get all transactions by the user (protected route)
router.get('/', authMiddleware, getUserTransactions);

module.exports = router;
