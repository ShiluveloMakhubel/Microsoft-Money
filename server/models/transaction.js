const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    accountId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Account'
    },
    transactionType: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      default: ''
    }
  });
  

const Transaction = mongoose.model('transactions', transactionSchema);

module.exports = Transaction;
