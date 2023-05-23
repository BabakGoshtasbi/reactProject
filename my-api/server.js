const express = require('express');
const app = express();
const PORT = 5000; // or any other port you prefer

// Add middleware to parse JSON
app.use(express.json());

// Define your API routes
app.get('/api/data', (req, res) => {
  // Implement your data retrieval logic here
  const data = { message: 'Hello from the API!' };
  res.json(data);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
