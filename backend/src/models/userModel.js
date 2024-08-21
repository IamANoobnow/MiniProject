const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  phone_number: { type: String },
  student_id: { type: String, required: true },
  enrollment_year: { type: Number, required: true },
  loan_eligibility: { type: Schema.Types.ObjectId, ref: 'LoanEligibility' },
  upi_transactions: [{ type: Schema.Types.ObjectId, ref: 'UPITransaction' }],
  loans: [{ type: Schema.Types.ObjectId, ref: 'Loan' }],
  notifications: [{ type: Schema.Types.ObjectId, ref: 'Notification' }],
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
