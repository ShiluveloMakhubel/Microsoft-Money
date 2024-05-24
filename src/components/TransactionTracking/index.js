import React, { useState, useEffect } from 'react';
import AddTransactionForm from './AddTransactionForm';
import TransactionList from './TransactionList';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TransactionTracking = () => {
  const { accountId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const baseURL = 'http://localhost:5001/api/';
  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`${baseURL}transactions/${accountId}`);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [accountId]);

  return (
    <div>
      <AddTransactionForm accountId={accountId} fetchTransactions={fetchTransactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default TransactionTracking;
