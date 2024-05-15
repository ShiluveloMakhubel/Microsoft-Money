import React from 'react';

const AccountItem = ({ account }) => {
  return (
    <li>
      <div>{account.name}</div>
      <div>{account.type}</div>
      <div>{account.balance}</div>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
};

export default AccountItem;
