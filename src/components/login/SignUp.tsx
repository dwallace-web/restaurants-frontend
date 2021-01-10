import React, { Component } from 'react';
// import { Button, Row, TextInput } from 'react-materialize';

export class SignUp extends Component {
  state = {
    email: null,
    password: null,
    username: null,
    restaurantOwner: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
  };

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
