const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const repaymentSchema = new Schema({
  loan_id: { type: Schema.Types.ObjectId, ref: 'Loan', required: true },
  payment_amount: { type: Number, required: true },
  payment_date: { type: Date, required: true },
  remaining_balance: { type: Number, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Repayment', repaymentSchema);
