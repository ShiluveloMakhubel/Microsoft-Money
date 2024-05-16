import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';

function App  ( ){
  return (
    <Router>
            <Routes>
            <Route path='/' exact element={<Dashboard/>}/>
            </Routes>
    </Router>
  );
};

export default App;
