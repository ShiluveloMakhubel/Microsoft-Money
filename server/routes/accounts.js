const express = require('express');
const router = express.Router();
const Account = require('../models/account');

// Get all account
router.get('/all', async (req, res) => {
  try {
    const accounts = await Account.find({});
    console.log('Fetched accounts:', accounts); // Log fetched accounts
    
    res.json(accounts)
  } catch (err) {
    console.error('Error fetching accounts:', err.message);
    res.status(500).json({ message: err.message });
  }
});


// Create an account
router.post('/add', async (req, res) => {
  const account = new Account({
    name: req.body.name,
    balance: req.body.balance,
    type: req.body.type,
  });
  try {
    const newAccount = await account.save();
    res.status(201).json(newAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
