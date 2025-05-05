const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes');

const app = express();
app.use(express.json());

// MongoDB connection (env var MONGO_URI, fallback to localhost)
const uri = process.env.MONGO_URI || 'mongodb://mongo:27017/catalog';
mongoose.connect(uri)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ Mongo connection error:', err));

app.use('/products', productRoutes);

// global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🚀 product-service listening on ${port}`));
