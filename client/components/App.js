import React, { Component, Fragment } from "react";
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phrase: 'Hello World'
    };
  }

  componentDidMount() {
    Axios.get('/crawl').then(response => console.log(response)).catch(err => console.log('error'));
  }

  
  render() {
    return (
      <Fragment>
        <h1>{this.state.phrase}</h1>
      </Fragment>
    );
  }
}

export default App;
