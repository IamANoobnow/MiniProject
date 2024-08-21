const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  loan_amount: { type: Number, required: true },
  loan_start_date: { type: Date, required: true },
  loan_end_date: { type: Date, required: true },
  interest_rate: { type: Number, required: true },
  loan_status: { type: String, required: true },
  repayments: [{ type: Schema.Types.ObjectId, ref: 'Repayment' }],
}, {
  timestamps: true
});

module.exports = mongoose.model('Loan', loanSchema);
