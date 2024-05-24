const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');
const Account = require('../models/account');





router.post('/transactions', async (req, res) => {
  const { accountId, transactionType, amount, category, date, description } = req.body;
  
  try {
    const account = await Account.findById(accountId);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    const transaction = new Transaction({
      accountId,
      transactionType,
      amount,
      category,
      date,
      description
    });

    await transaction.save();

    // Update account balance
    if (transactionType === 'Deposit') {
      account.balance += parseFloat(amount); // Ensure amount is treated as a number
    } else if (transactionType === 'Withdrawal') {
      account.balance -= parseFloat(amount); // Ensure amount is treated as a number
    }
    

    await account.save();

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/transactions/:accountId', async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.params.userId });
    res.status(200).send(transactions);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Edit a transaction
router.put('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!transaction) {
      return res.status(404).send();
    }
    res.send(transaction);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a transaction
router.delete('/transactions/:id', async (req, res) => {
  try {
    const transaction = await Transaction.findByIdAndDelete(req.params.id);
    if (!transaction) {
      return res.status(404).send();
    }
    res.send(transaction);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
