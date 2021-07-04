import React, { Component } from 'react'
import Myfav from './Myfav';
import Home from './Home';
import Navigation from './Navigation';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
          <Navigation/>
          <Router>
            <Switch>
              <Route exact path='/' >
                <Home />
              </Route>
              <Route path='/myfav'>
                  <Myfav />
              </Route>
            </Switch>
          </Router>




      </div>
    )
  }
}

export default App
