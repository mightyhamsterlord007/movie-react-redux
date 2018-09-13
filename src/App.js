import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Home from './components/layout/Home';
import store from './store';

class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <Home />
     </Provider>
    );
  }
}

export default App;