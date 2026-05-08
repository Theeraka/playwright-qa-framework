const validUser = {
  username: 'Admin',
  password: 'admin123'
};

const invalidUser = {
  username: 'wrongUser123',
  password: 'wrongPass123',
  expectedError: 'Invalid credentials'
};

module.exports = {
  validUser,
  invalidUser
};