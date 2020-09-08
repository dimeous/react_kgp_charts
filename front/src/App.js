import Dashboard from "./components/Dashboard";
import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

    getApiData() {
    this.setState({ isLoading: true });

    axios.get("query")
        .then(result => this.setState({
          hits: result.data.hits,
          isLoading: false
        }))
        .catch(error => this.setState({
          error,
          isLoading: false
        }));
  }
  render(){
      return(
          <Dashboard/>
      )
  }

}

export default App;
