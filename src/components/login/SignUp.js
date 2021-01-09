import React, { Component } from 'react';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      login: false,
      store: null,
    };
  }
  render() {
    return <div> Sign Up </div>;
  }
}

export default SignUp;
