import './Dashboard.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AddAccountForm, DeleteAccountModal } from '../components/AccountManagement';
import { Link, useNavigate } from 'react-router-dom';
import { getAllAccounts } from '../services/services/services';

function Dashboard() {
  const [data, setData] = useState([]);
  const [isAccountModalOpen, setAccountModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accounts = await getAllAccounts();
        setData(accounts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleAccountModal = () => {
    setAccountModalOpen(!isAccountModalOpen);
  };

  const toggleDeleteModal = () => {
    setDeleteModalOpen(!isDeleteModalOpen);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAccountClick = (accountId) => {
    navigate(`/transactions/${accountId}`);
  };

  return (
    <div className="dashboard">
      <h1>My Money</h1>
      <div className="burger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div><button> Banking </button></div>
        <div><button> Bills </button></div>
        <div><button> Budget </button></div>
        <div><button> Investing </button></div>
        <div><button> Planning </button></div>
        <div><button> Taxes </button></div>
      </div>
      <div className='content'>
        Choose a task 
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Enter a transaction</option>
          <option value="option1">Record a bill or transaction</option>
          <option value="option2">Review my portfolio</option>
          <option value="option3">Forecast my cashflow</option>
          <option value="option4">View my budget</option>
          <option value="option4">See a report</option>
          <option value="option4">See a report</option>
        </select>
      </div>
      <div className="box">
        <h2>Favourite Account</h2>
        <div className='content'>
          <ul>
            {data.map(item => (
              <li key={item._id} onClick={() => handleAccountClick(item._id)}>
                <table>
                  <thead>
                    <tr>
                      <th>Account</th>
                      <th>Updated</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{item.name}</td>
                      <td></td>
                      <td>R {item.balance}</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            ))}
          </ul>
          <button>Go to the list of accounts</button>
          <button>Add accounts to my Favourite</button>
          <button onClick={toggleAccountModal}>Set up new account</button>
        </div>
      </div>
      {isAccountModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleAccountModal}>&times;</span>
            <h2>Add Account</h2>
            <AddAccountForm />
          </div>
        </div>
      )}
      <div className="box">
        <h2>Bills and Deposit</h2>
        <div className='content'>
          <button>Set up or view deposit</button>
        </div>
      </div>
      <div className="box">
        <h2>Spending Reports</h2>
        <div className='content'>
          <p>
            To view reports, your account must contain transactions. 
            To enter transactions or to download them from your bank go to <button>account lists</button>
          </p>
        </div>
      </div>
      <div className="box">
        <h2>Whats new in Microsoft Money</h2>
        <div className='content'>
          <button>Announcement</button>&nbsp;&nbsp;&nbsp;
          <button>New features</button>
          <p>Updated Announcement are not yet available</p>
        </div>
      </div>
      <div className="box">
        <h2>Your personal AI Money assistant</h2>
        <button><Link to="/nlp">Go to NLP Chatbot</Link></button>
      </div>
    </div>
  );
}

export default Dashboard;
