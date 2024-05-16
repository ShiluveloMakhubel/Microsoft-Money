import './Dashboard.css'

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

//import axios from 'axios'; // Example of using Axios for API calls

function Dashboard() {
  //const [userData, setUserData] = useState(null);

  /*useEffect(() => {
    // Example of fetching user data from an API
    axios.get('/api/user')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []); // Empty dependency array to ensure useEffect runs only once
*/

    const [selectedOption, setSelectedOption] = useState('');
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
      
  
    // Function to handle select box change
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    }
  return (
    <div className="dashboard">
    <h1>My Money</h1>
    
    <div className="burger-menu" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>

      {/* Menu */}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
       <div><button> Banking </button> </div>
       <div><button> Bills </button></div>
      <div> <button> Budget </button></div>
      <div> <button> Investing </button></div>
      <div> <button>  Planning </button> </div>
      <div> <button>  Taxes </button></div>
       
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
          {/* Display selected option 
          {selectedOption && <p>You selected: {selectedOption}</p>}
  <button>Go</button>*/}
        </div>
      

      
    {/* First box */}
    <div className="box">
      <h2> Favourite Account</h2>
      <div className='content'>

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
                <td>checking</td>
                <td></td>
                <td>$ 0.0</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        <ul>
          <button>Go to the list of accounts</button>
          <button>Add accounts to my Favourite</button>
          <button>set up new account</button>
        </ul>
      </div>
    </div>

    {/* Second box */}
    <div className="box">
      <h2>Bills and Deposit</h2>
      <div className='content'>
        <ul>
          <button>Set up or view deposit</button>
        </ul>
      </div>
    </div>

    {/* Third box */}
    <div className="box">
      <h2>Spending Reports</h2>
      <div className='content'>
        <p>
          To view reorts, your account must contain transactions. 
          To enter transactions or to download 
           them from your bank go to <button>account lists</button>
        </p>
      </div>
    </div>
    <div className="box">
      <h2>Whats new in Microsoft Money</h2>
      <div className='content'>
        <ul>
          <button>Announcement</button> &nbsp;&nbsp;&nbsp;
         <button>new features</button>
        <p> Updated Announcement are not yet available</p>
        </ul>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;
