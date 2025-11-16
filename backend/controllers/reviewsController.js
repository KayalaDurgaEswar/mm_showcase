const Review = require('../models/Review');

exports.list = async (req, res) => res.json(await Review.find().sort({ createdAt: -1 }));
exports.create = async (req, res) => {
  const r = new Review(req.body);
  await r.save();
  res.json(r);
};
exports.update = async (req, res) => {
  const r = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(r);
};
exports.remove = async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
