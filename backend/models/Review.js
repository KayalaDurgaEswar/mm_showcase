const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: String,
  rating: { type: Number, default: 5 },
  message: String,
  youtubeUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', ReviewSchema);
