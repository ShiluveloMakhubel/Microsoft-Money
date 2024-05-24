const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../server/server');
const Account = require('../server/models/account');
const Transaction = require('../server/models/transaction');
require('dotenv').config();
// Add at the top of your test files or in a setup file
jest.setTimeout(30000); // 30 seconds

beforeAll(async () => {
  const url = process.env.MONGO_URI;
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});



describe('Transaction API Integration Tests', () => {
  let accountId;

  beforeEach(async () => {
    const account = new Account({
      name: 'Test Account',
      balance: 1000,
      type: 'Savings'
    });
    const savedAccount = await account.save();
    accountId = savedAccount._id;
  });

  it('should fetch transactions for an account', async () => {
    const transaction = new Transaction({
      accountId,
      transactionType: 'Deposit',
      amount: 600,
      category: 'grocery',
      date: new Date(),
      description: 'hhh'
    });
    await transaction.save();

    const res = await request(app).get(`/api/transactions/${transaction.accountId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].transactionType).toBe('Deposit');
    expect(res.body[0].amount).toBe(600);
    expect(res.body[0].category).toBe('grocery');
    expect(res.body[0].description).toBe('hhh');
  });
});
