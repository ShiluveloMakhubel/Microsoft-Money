const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server/server');
const Account = require('../server/models/account');
require('dotenv').config();
// Add at the top of your test files or in a setup file
jest.setTimeout(30000); // 30 seconds

beforeAll(async () => {
  const url = process.env.MONGO_URI;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});



describe('Account API Integration Tests', () => {
  it('should create a new account', async () => {
    const res = await request(app)
      .post('/api/add')
      .send({
        name: 'Test Account',
        balance: 1000,
        type: 'Savings'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toBe('Test Account');
    expect(res.body.balance).toBe(1000);
    expect(res.body.type).toBe('Savings');
  });

  it('should fetch an account by ID', async () => {
    const account = new Account({
      name: 'Fetch Account',
      balance: 500,
      type: 'Checking'
    });
    const savedAccount = await account.save();
    const res = await request(app).get(`/api/accounts/${savedAccount._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toBe('Fetch Account');
    expect(res.body.balance).toBe(500);
    expect(res.body.type).toBe('Checking');
  });
});
