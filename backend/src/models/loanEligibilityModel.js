const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const loanEligibilitySchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  eligible_amount: { type: Number, required: true },
  eligibility_status: { type: String, required: true },
  computed_at: { type: Date, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('LoanEligibility', loanEligibilitySchema);
