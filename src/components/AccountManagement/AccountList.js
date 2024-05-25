import React, { useState,  } from 'react';
//import ApiService from '../utils/ApiService';
import AccountItem from './AccountItem';

const AccountList = () => {
  const [accounts] = useState([]);

  /*useEffect(() => {
    // Fetch account data from the server when component mounts
    ApiService.fetchAccounts()
      .then((data) => setAccounts(data))
      .catch((error) => console.error('Error fetching accounts:', error));
  }, []);
  */

  return (
    <div>
      <h2>Accounts</h2>
      <ul>
        {accounts.map((account) => (
          <AccountItem key={account.id} account={account} />
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
