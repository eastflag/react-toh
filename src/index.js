import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";
import heroApp from "./reducer";
import Root from "./Root";

const store = createStore(heroApp);

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
