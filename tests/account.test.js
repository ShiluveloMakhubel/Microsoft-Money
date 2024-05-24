const mongoose = require('mongoose');
const Account = require('../server/models/account');
const request = require('supertest');
const app = require('../server/server');

beforeAll(async () => {
  const url = 'mongodb+srv://throneluvi:Shiluvelo26*@money.evytiv8.mongodb.net/money';
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Account API', () => {
  it('should create a new account', async () => {
    const res = await request(app)
      .post('/api/add')
      .send({
        name: 'Test Account',
        balance: 1000,
        type: 'Savings',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should fetch an account by ID', async () => {
    const account = new Account({ name: 'Test Account', balance: 1000, type: 'Savings' });
    await account.save();

    const res = await request(app).get(`/api/accounts/${account._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.name).toEqual(account.name);
  });
});
