const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async function (req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(data.id).select('-passwordHash');
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
