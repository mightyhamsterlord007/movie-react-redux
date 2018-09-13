import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/layout/Home';
import store from './store';

import { MovieInfo } from './components/containers';

class App extends Component {
  render() {
    return (
     <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/movie/:id' component={MovieInfo} />
            <Route render={() => <h1>PAGE NOT FOUND</h1>} />
          </Switch>
        </Router>
     </Provider>
    );
  }
}

export default App;
