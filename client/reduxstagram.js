// let's go!
import React from 'react';

import ReactDOM from 'react-dom';
import 'babel-polyfill';

//import css
import css from './styles/style.styl';

//import componenets
import App from './components/App.js';
import Single from './components/single.js';
import PhotoGrid from './components/photogrid.js';

//import react router dependencies
import { Router, Route , IndexRoute } from'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(
  router , document.getElementById('root')
);
