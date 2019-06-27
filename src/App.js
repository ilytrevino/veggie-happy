import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/home' component={Home} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
