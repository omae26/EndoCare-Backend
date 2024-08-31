const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if token is not provided
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    // Verify the token and set req.patient
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.patient = decoded.patient; // Set req.patient to match your controller
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
