const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// GET /status endpoint required by Lab 11
app.get('/status', (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Node.js API containerized with Docker & managed by Jenkins CI/CD pipeline",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});