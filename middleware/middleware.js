const jwt = require('jsonwebtoken');

// Middleware to verify token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send({ message: 'Token is required' });
  }

  try {
    const verified = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = verified; // Add user data to request
    next();
  } catch (error) {
    return res.status(401).send({ message: 'Invalid or expired token' });
  }
};

module.exports = { authenticateToken };
