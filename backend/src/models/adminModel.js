const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Admin', adminSchema);
