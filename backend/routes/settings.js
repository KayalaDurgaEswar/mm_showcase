const express = require('express');
const Setting = require('../models/Setting');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

// get all settings
router.get('/', async (req, res) => {
  const settings = await Setting.find();
  const out = {};
  settings.forEach(s => (out[s.key] = s.value));
  res.json(out);
});

// set/update single setting
router.post('/', authMiddleware, async (req, res) => {
  const { key, value } = req.body;
  const s = await Setting.findOneAndUpdate({ key }, { value }, { upsert: true, new: true });
  res.json(s);
});

module.exports = router;
