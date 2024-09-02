const express = require('express');
const userRoutes = require('./userRoutes');
const loanRoutes = require('./loanRoutes');
const transactionRoutes = require('./transactionRoutes');
const repaymentRoutes = require('./repaymentRoutes');
const notificationRoutes = require('./notificationRoutes');

const router = express.Router();

// Use the individual route files
router.use('/users', userRoutes);
router.use('/loans', loanRoutes);
router.use('/transactions', transactionRoutes);
router.use('/repayments', repaymentRoutes);
router.use('/notifications', notificationRoutes);

module.exports = router;
