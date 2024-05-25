import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import NLPPage from './pages/NLPPage';
import TransactionTracking from './components/TransactionTracking/index'


function App  ( ){
  return (
    <Router>
            <Routes>
            <Route path='/' exact element={<Dashboard/>}/>
            <Route path="/nlp" element={<NLPPage />} />
            <Route path="/transactions/:accountId" element={< TransactionTracking/>} />
            </Routes>
    </Router>
  );
};

export default App;
