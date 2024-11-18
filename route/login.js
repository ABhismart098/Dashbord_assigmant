const express = require('express');
const { login } = require('../controller/logincontroller'); // Ensure correct file path
const { authenticateToken } = require('../middleware/middleware');

const router = express.Router();

// Public route for login
router.post('/login', login);

// Protected route (requires valid JWT token)
router.get('/protected', authenticateToken, (req, res) => {
  res.send({ 
    message: 'Access granted to protected route', 
    user: req.user, // User data added by the middleware
  });
});

module.exports = router;
