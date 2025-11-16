const Review = require('../models/Review');

exports.list = async (req, res) => {
  const items = await Review.find().sort({ createdAt: -1 });
  res.json(items);
};

exports.create = async (req, res) => {
  const doc = new Review(req.body);
  await doc.save();
  res.json(doc);
};

exports.remove = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
