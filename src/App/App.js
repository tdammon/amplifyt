import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {

  render() {
      return(
        <div>
            <p>Hello</p>
            <button onClick={()=> axios.post('/apitestlambda-amplifyt', {users:5})}>
              Hi
            </button>
        </div>
      )
  }
}

export default (App);