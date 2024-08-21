const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  message: { type: String, required: true },
  sent_at: { type: Date, required: true },
  is_read: { type: Boolean, default: false },
}, {
  timestamps: true
});

module.exports = mongoose.model('Notification', notificationSchema);
