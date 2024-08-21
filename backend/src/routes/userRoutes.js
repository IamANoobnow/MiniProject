const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.send('Hello from User Route');
});

module.exports = router;  // Make sure to export the router
