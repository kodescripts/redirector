// test
const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  const url = req.query.url;

  if (!url) {
    return res.status(400).send('Missing URL parameter');
  }

  try {
    const response = await axios.get(url);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
