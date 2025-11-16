const express = require('express');
const Product = require('../models/Product');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ error: 'Not found' });
  res.json(p);
});

router.post('/', authMiddleware, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

router.put('/:id', authMiddleware, async (req, res) => {
  const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(p);
});

router.delete('/:id', authMiddleware, async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

module.exports = router;
