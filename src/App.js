import React, { Component } from 'react'
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Test from './components/Test';
import Home from './components/Home';
import axios from 'axios';
class App extends Component {

  state = {
    user: null
  }
  componentDidMount () {
    axios.post('XXXXXXX', {
      Username: "XXXX",
      Password: "XXXXX"
    })
    .then(response => {
      const data = response.data;
      this.setState({user: response.data.user})
    })
    .catch(e => {
      console.log('no such user');
    });

  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/test">Test</Link>
        </header>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" render={ () => <Test {...this.state} /> } />
        </Switch>
      </div>
    );
  }
  
}

export default App;
