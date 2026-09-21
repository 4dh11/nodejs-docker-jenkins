const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/status', (req, res) => {
  res.status(200).json({
    status: "Working wooooo",
    message: "CI/CD Pipeline automated build verified!",
    version: "1.0.1",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});