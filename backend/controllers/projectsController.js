const Project = require('../models/Project');

exports.list = async (req, res) => {
  const items = await Project.find().sort({ createdAt: -1 });
  res.json(items);
};

exports.create = async (req, res) => {
  const p = new Project(req.body);
  await p.save();
  res.json(p);
};

exports.update = async (req, res) => {
  const p = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(p);
};

exports.remove = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
