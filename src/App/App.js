import React, { Component } from 'react';
import axios from 'axios';
import Amplify, {API} from 'aws-amplify'
import aws from './aws-exports'

API.configure(aws)

class App extends Component {

  triggerAPI = () => {
    API.get('apitest', '/apitest', {headers: {}, response: true, queryStringParameters: {}})
    .then(response=> {console.log(response)})
    .catch(error=> {console.log(error)})
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