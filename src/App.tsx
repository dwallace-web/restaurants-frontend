import React from 'react';
import './App.css';

import Body from './components/Body/body';
import SignUp from './components/login/SignUp';
import SignIn from './components/login/SignIn';
import Comment from './components/comment/commentdisplay';

function App() {
  return (
    <div className="App">
      <h1 className="font-mono">Hello World</h1>
      <Body />
      <SignIn />
      <SignUp />
      <Comment />
    </div>
  );
}

export default App;
