const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

module.exports = async function (req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'No token' });
  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(payload.id);
    if (!admin) return res.status(401).json({ message: 'Invalid token' });
    req.admin = admin;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};