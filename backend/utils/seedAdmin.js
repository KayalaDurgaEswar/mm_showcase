const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports = async function seedAdmin() {
  try {
    const email = process.env.ADMIN_EMAIL;
    const pass = process.env.ADMIN_PASSWORD;
    if (!email || !pass) return;
    let user = await User.findOne({ email });
    if (!user) {
      const hash = await bcrypt.hash(pass, 10);
      user = new User({ email, passwordHash: hash, role: 'admin' });
      await user.save();
      console.log('Admin seeded:', email);
    } else {
      console.log('Admin exists');
    }
  } catch (err) {
    console.error('seed admin err', err);
  }
};
