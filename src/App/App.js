import React, { Component } from 'react';
import axios from 'axios';
import {API} from 'aws-amplify'

class App extends Component {

  triggerAPI = () => {
    API.get('apitest', '/apitest', {})
    .then(response=> {console.log(response)})
    .catch(error=> {console.log(error.response)})
  }

  render() {
      return(
        <div>
            <p>Hello</p>
            <button onClick={()=> this.triggerAPI()}>
              Hi
            </button>
        </div>
      )
  }
}

export default (App);