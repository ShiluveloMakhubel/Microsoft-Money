import React, { useState } from 'react';

const EditAccountForm = ({ account, onSubmit }) => {
  const [accountName, setAccountName] = useState(account.name);
  const [accountNumber, setAccountNumber] = useState(account.number);
  const [initialBalance, setInitialBalance] = useState(account.balance);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...account, name: accountName, number: accountNumber, balance: initialBalance });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditAccountForm;
