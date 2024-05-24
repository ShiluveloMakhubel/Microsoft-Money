import React from 'react';

const TransactionList = ({ accountId, transactions }) => {
  return (
    <div>
      <h2>Transactions for Account {accountId}</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td>{transaction.date}</td>
              <td>{transaction.transactionType}</td>
              <td>${transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
