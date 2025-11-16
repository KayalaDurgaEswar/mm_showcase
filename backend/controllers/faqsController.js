const FAQ = require('../models/FAQ');

exports.list = async (req, res) => res.json(await FAQ.find().sort({ createdAt: -1 }));
exports.create = async (req, res) => {
  const f = new FAQ(req.body);
  await f.save();
  res.json(f);
};
exports.update = async (req, res) => {
  const f = await FAQ.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(f);
};
exports.remove = async (req, res) => {
  await FAQ.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
