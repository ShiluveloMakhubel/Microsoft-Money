import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import NLPPage from './pages/NLPPage';

function App  ( ){
  return (
    <Router>
            <Routes>
            <Route path='/' exact element={<Dashboard/>}/>
            <Route path="/nlp" element={<NLPPage />} />
            </Routes>
    </Router>
  );
};

export default App;
