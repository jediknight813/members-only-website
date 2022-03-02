import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Messages from './components/Messages';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const store = createStore(reducers, compose(applyMiddleware(thunk)));


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}> 
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Messages />} />
            <Route path="SignUp" element={<SignUp />} />
            <Route path="Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


