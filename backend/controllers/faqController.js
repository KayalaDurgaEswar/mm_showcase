const FAQ = require('../models/FAQ');

exports.list = async (req, res) => {
  const items = await FAQ.find().sort({ order: 1, createdAt: -1 });
  res.json(items);
};

exports.create = async (req, res) => {
  const doc = new FAQ(req.body);
  await doc.save();
  res.json(doc);
};

exports.update = async (req, res) => {
  const doc = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(doc);
};

exports.remove = async (req, res) => {
  await FAQ.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
