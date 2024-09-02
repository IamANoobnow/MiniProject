const express = require('express');
const { makeRepayment, getRepaymentHistory } = require('../controllers/repaymentController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Make a repayment (protected route)
router.post('/', authMiddleware, makeRepayment);

// Get repayment history for a specific loan (protected route)
router.get('/:loan_id', authMiddleware, getRepaymentHistory);

module.exports = router;
