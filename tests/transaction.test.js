const mongoose = require('mongoose');
const Transaction = require('../server/models/transaction');
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

describe('Transaction API', () => {
  it('should create a new transaction', async () => {
    const account = new Account({ name: 'Test Account', balance: 1000, accountType: 'Savings' });
    await account.save();

    const res = await request(app)
      .post('/api/transactions')
      .send({
        accountId: account._id,
        transactionType: 'Deposit',
        amount: 500,
        category: 'Salary',
        date: new Date(),
        description: 'Monthly salary',
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
  });

  it('should fetch transactions for an account', async () => {
    const account = new Account({ name: 'Test Account', balance: 1000, accountType: 'Savings' });
    await account.save();

    const transaction = new Transaction({
      accountId: account._id,
      transactionType: 'Deposit',
      amount: 500,
      category: 'Salary',
      date: new Date(),
      description: 'Monthly salary',
    });
    await transaction.save();

    const res = await request(app).get(`/api/transactions/${account._id}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
