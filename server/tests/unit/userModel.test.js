const User = require('../models/userModel');

test('creates a new user', async () => {
  const user = new User({
    username: 'testuser',
    email: 'testuser@example.com',
    password: 'password123',
  });

  await user.save();
  const foundUser = await User.findOne({ email: 'testuser@example.com' });
  expect(foundUser).toBeTruthy();
});
