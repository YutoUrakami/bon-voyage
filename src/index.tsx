import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from './components/app/app';
import './index.css';
import {generateStore} from "./store";

ReactDOM.render(
  <Provider store={generateStore()}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
