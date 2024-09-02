const Loan = require('../models/loanModel');

// Apply for a loan
exports.applyForLoan = async (req, res) => {
    try {
        const { loan_amount, interest_rate } = req.body;

        const loan = new Loan({
            user_id: req.userId,
            loan_amount,
            interest_rate,
            loan_start_date: new Date(),
            loan_status: 'Pending'
        });

        await loan.save();
        res.status(201).json({ message: 'Loan application submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get loan details
exports.getLoanDetails = async (req, res) => {
    try {
        const loan = await Loan.findById(req.params.loan_id);
        res.json(loan);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get loans by user
exports.getLoansByUser = async (req, res) => {
    try {
        const loans = await Loan.find({ user_id: req.userId });
        res.json(loans);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
