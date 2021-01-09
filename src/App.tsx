import React from 'react';
import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import SignUp from './components/login/SignUp';
import SignIn from './components/login/SignIn';

import CustomerBody from './components/body/customerBody';
import OwnerBody from './components/body/ownerBody';

function App() {
  const [token, settoken] = useState('');
  const [businessOwner, setBusinessOwner] = useState(false);
  const [userId, setUserId] = useState('');

  const userFlow = () => {
    return token === localStorage.getItem('restauranttoken') ? (
      <div className="">
        <CustomerBody />
        <OwnerBody />
      </div>
    ) : (
      <div className="">
        <SignIn />
        <SignUp />
      </div>
    );
  };
  //Login and Tokenizations
  return <div className="App">{userFlow()}</div>;
}

export default App;
