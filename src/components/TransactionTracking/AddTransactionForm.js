import React, { useState } from 'react';
import axios from 'axios';

const AddTransactionForm = ({ accountId, fetchTransactions }) => {
  const [transactionType, setTransactionType] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTransaction = { accountId, transactionType, amount, category, date, description };
    const baseURL = 'http://localhost:5001/api/';
    try {
      await axios.post(`${baseURL}transactions`, newTransaction);
      fetchTransactions();
    } catch (error) {
      console.error('Error adding transaction:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={transactionType} onChange={(e) => setTransactionType(e.target.value)} placeholder="Transaction Type" required />
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"></textarea>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default AddTransactionForm;
