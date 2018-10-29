import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom"
import SingleCity from './components/SingleCity';
import SinglePost from './components/SinglePost';


class App extends Component {
  render() {
    return (
      <Router>
      <Switch>
        <Route exact path ='/cities/:id' component={SingleCity} /> 
        <Route exact path ='/cities/:city_id/posts/:id' component={SinglePost} /> 
      </Switch>
    </Router>

    );
  }
}

export default App;
