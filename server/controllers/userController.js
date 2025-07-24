const User = require('../models/userModel');

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({ username, email, password });
  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
};
