const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

// Add a new transaction
router.post('/transactions', async (req, res) => {
  const { accountId, transactionType, amount, category, date, description } = req.body;
  
  // Validate the request data
  if (!accountId || !transactionType || !amount || !category || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newTransaction = new Transaction({
    accountId,
    transactionType,
    amount,
    category,
    date,
    description
  });

  try {
    const savedTransaction = await newTransaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Get transactions for a user
router.get('/transactions/:userId', async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.params.userId });
    res.status(200).send(transactions);
  } catch (error) {
    res.status(500).send(error);
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
