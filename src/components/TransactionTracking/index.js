import React, { useState, useEffect } from 'react';
import AddTransactionForm from './AddTransactionForm';
import TransactionList from './TransactionList';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TransactionTracking = () => {
  const { accountId } = useParams();
  const [transactions, setTransactions] = useState([]);
  const [account, setAccount] = useState(null);
  const baseURL = 'http://localhost:5001/api/';

  const fetchTransactions = async () => {
    try {
      console.log(`Fetching transactions for account ID: ${accountId}`);
      const response = await axios.get(`${baseURL}transactions/${accountId}`);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const fetchAccount = async () => {
    try {
      console.log(`Fetching account for account ID: ${accountId}`);
      const response = await axios.get(`${baseURL}accounts/${accountId}`);
      setAccount(response.data);
    } catch (error) {
      console.error('Error fetching account:', error);
    }
  };

  useEffect(() => {
    fetchTransactions();
    fetchAccount();
  }, [accountId]);

  return (
    <div>
      <h2>Account Balance: {account ? `R ${account.balance}` : 'Loading...'}</h2>
      <AddTransactionForm accountId={accountId} fetchTransactions={fetchTransactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default TransactionTracking;
