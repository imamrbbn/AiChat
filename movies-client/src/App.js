import React from 'react';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';
import Home from './pages/Home'
import MyFavorites from './pages/MyFavorites'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/search" component={Home}/>
            <Route exact path="/my-favorites" component={MyFavorites}/>
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
