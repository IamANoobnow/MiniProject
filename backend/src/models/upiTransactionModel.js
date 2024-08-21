const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const upiTransactionSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  transaction_date: { type: Date, required: true },
  amount: { type: Number, required: true },
  balance_after_transaction: { type: Number, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('UPITransaction', upiTransactionSchema);
