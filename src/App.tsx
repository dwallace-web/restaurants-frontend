import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';

//Login and tokenizations

function App() {
  const userFlow = () => {
    return (
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          {/* <Route exat path="" components= /> 
        <Route exat path="" components= /> 
        <Route exat path="" components= /> 
        <Route exat path="" components= /> 
        */}
        </Switch>
      </Router>
    );
  };

  return <div className="App">{userFlow()}</div>;
}

export default App;
