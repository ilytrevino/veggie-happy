import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
            <Switch>
              <Route path='/' component={Login} exact/>
            </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
