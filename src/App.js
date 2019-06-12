import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
            <Switch>
              <Route path='/' component={Home} exact/>
            </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
