const express = require('express');
const { applyForLoan, getLoanDetails, getLoansByUser } = require('../controllers/loanController');
const { authMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

// Apply for a loan (protected route)
router.post('/apply', authMiddleware, applyForLoan);

// Get loan details (protected route)
router.get('/:loan_id', authMiddleware, getLoanDetails);

// Get all loans by the user (protected route)
router.get('/user', authMiddleware, getLoansByUser);

module.exports = router;
