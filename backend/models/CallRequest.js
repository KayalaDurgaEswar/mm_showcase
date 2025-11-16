const mongoose = require('mongoose');

const CallSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  city: String,
  preferredDateTime: String,
  message: String,
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CallRequest', CallSchema);
