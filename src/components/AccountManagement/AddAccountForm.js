import React, { useState } from 'react';
import { addAccount } from '../../services/services/services'; // Adjust the import path as necessary

const AddAccountForm = ({ onSubmit }) => {
  const [accountType, setAccountType] = useState('');
  const [accountName, setAccountName] = useState('');
  const [initialBalance, setInitialBalance] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'accountType') setAccountType(value);
    if (name === 'accountName') setAccountName(value);
    if (name === 'initialBalance') setInitialBalance(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAccountData = {
      name: accountName,
      balance: parseFloat(initialBalance),
      type: accountType,
    };
    
    try {
      const newAccount = await addAccount(newAccountData);
      console.log('New account added:', newAccount);
      // Optionally, reset the form fields after successful submission
      setAccountType('');
      setAccountName('');
      setInitialBalance(0);
      // Call the onSubmit callback if provided
      if (onSubmit) onSubmit(newAccount);
    } catch (error) {
      console.error('Error adding account:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Account Type:
        <input
          type="text"
          name="accountType"
          value={accountType}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Account Name:
        <input
          type="text"
          name="accountName"
          value={accountName}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Initial Balance:
        <input
          type="number"
          name="initialBalance"
          value={initialBalance}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Account</button>
    </form>
  );
};

export default AddAccountForm;
