const Transaction = require('../models/upiTransactionModel');

// Add a transaction
exports.addTransaction = async (req, res) => {
    try {
        const { amount, balance_after_transaction } = req.body;

        const transaction = new Transaction({
            user_id: req.userId,
            amount,
            balance_after_transaction,
            transaction_date: new Date()
        });

        await transaction.save();
        res.status(201).json({ message: 'Transaction added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get user transactions
exports.getUserTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ user_id: req.userId });
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
