import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';

//import our reducer
import { reducer } from './reducers'

//creating our redux store
const store = createStore(reducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
