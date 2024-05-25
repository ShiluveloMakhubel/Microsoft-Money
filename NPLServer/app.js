// app.js
const express = require('express');
const cors = require('cors');
const { processText } = require('./nlp');

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

app.post('/api/nlp', async (req, res) => {
  try {
    const text = req.body.text;
    const processedText = await processText(text);
    res.json({ result: processedText });
  } catch (error) {
    console.error('Error processing text:', error);
    res.status(500).json({ error: 'Error processing text' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
