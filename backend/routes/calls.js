const express = require('express');
const CallRequest = require('../models/CallRequest');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.post('/', async (req, res) => {
  const c = new CallRequest(req.body);
  await c.save();
  res.json(c);
});

router.get('/', authMiddleware, async (req, res) => {
  const calls = await CallRequest.find().sort({ createdAt: -1 });
  res.json(calls);
});

router.put('/:id', authMiddleware, async (req, res) => {
  const c = await CallRequest.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(c);
});

module.exports = router;
