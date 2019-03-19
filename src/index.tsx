import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from './components/app/app';
import './index.css';
import {generateStore} from "./store";
import * as WebFont from "webfontloader";

WebFont.load({
  google: {
    families: [
      "Advent Pro:300,700",
      "Open Sans",
      "Material Icons"
    ]
  },
  custom: {
    families: ["Font Awesome\ 5 Brands:400"],
    urls: ["//use.fontawesome.com/releases/v5.0.8/css/all.css"]
  }
});

ReactDOM.render(
  <Provider store={generateStore()}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
