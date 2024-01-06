const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(express.json());

app.get('/upcoming-ipo', async (req, res) => {
  try {
    const response = await axios.get('https://example-ipo-api.com/upcoming', {
      headers: {
        'Authorization': `Bearer ${process.env.IPO_API_KEY}`
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
