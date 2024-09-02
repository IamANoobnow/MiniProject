const Repayment = require('../models/repaymentModel');

// Make a repayment
exports.makeRepayment = async (req, res) => {
    try {
        const { loan_id, payment_amount } = req.body;

        const repayment = new Repayment({
            loan_id,
            payment_amount,
            payment_date: new Date(),
        });

        await repayment.save();
        res.status(201).json({ message: 'Repayment processed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get repayment history
exports.getRepaymentHistory = async (req, res) => {
    try {
        const repayments = await Repayment.find({ loan_id: req.params.loan_id });
        res.json(repayments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
