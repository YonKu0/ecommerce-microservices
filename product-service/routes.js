const express = require('express');
const Product = require('./models/product');
const router = express.Router();

// List all products
router.get('/', async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// Get one product
router.get('/:id', async (req, res, next) => {
  try {
    const p = await Product.findById(req.params.id);
    p ? res.json(p) : res.status(404).end();
  } catch (err) {
    next(err);
  }
});

// Create product
router.post('/', async (req, res, next) => {
  try {
    const p = new Product(req.body);
    const saved = await p.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
});

// Update product
router.put('/:id', async (req, res, next) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    updated ? res.json(updated) : res.status(404).end();
  } catch (err) {
    next(err);
  }
});

// Delete product
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await Product.findByIdAndDelete(req.params.id);
    result ? res.status(204).end() : res.status(404).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
