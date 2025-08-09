const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const URL = require('./models/URL');
require('dotenv').config(); // Load .env first

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb://localhost:27017/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB connection error:', err));


function generateShortId() {
  return Math.random().toString(36).substring(2, 8);
}

app.post('/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = generateShortId();
  await URL.create({ shortId, redirectURL: originalUrl });
  res.json({ shortUrl: `http://localhost:5000/${shortId}` });
});

app.get('/:shortId', async (req, res) => {
  const entry = await URL.findOne({ shortId: req.params.shortId });
  if (entry) return res.redirect(entry.redirectURL);
  res.status(404).send('Not found');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
