const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const { generateToken } = require('../utils/tokenUtils');

const registerUser = async ({ name, email, password }) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error('User already exists');

  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hashed });
  return { user, token: generateToken(user._id) };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid credentials');

  return { user, token: generateToken(user._id) };
};

module.exports = { registerUser, loginUser };
