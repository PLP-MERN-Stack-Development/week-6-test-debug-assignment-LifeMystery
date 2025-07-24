const request = require('supertest');
const app = require('../server'); // Express app

describe('POST /register', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123',
      });
    
    expect(res.status).toBe(201);
    expect(res.body.message).toBe('User registered successfully');
  });
});
