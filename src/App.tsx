import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import SignUp from './components/login/SignUp';
import SignIn from './components/login/SignIn';

function App() {
  const userFlow = () => {
    return (
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
