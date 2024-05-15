import React, { useState } from 'react';

const AddAccountForm = ({ onSubmit }) => {
  const [accountType, setAccountType] = useState('');
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [initialBalance, setInitialBalance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ accountType, accountName, accountNumber, initialBalance });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Account Type:
        <input type="text" value={accountType} onChange={(e) => setAccountType(e.target.value)} />
      </label>
      <label>
        Account Name:
        <input type="text" value={accountName} onChange={(e) => setAccountName(e.target.value)} />
      </label>
      <label>
        Account Number:
        <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
      </label>
      <label>
        Initial Balance:
        <input type="text" value={initialBalance} onChange={(e) => setInitialBalance(e.target.value)} />
      </label>
      <button type="submit">Add Account</button>
    </form>
  );
};

export default AddAccountForm;
