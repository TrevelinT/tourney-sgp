import "react-hot-loader";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import configureStore from "store";
import { render } from "react-dom";
import Application from "view/Application";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

const store = configureStore();
const Root = (): ReactElement => (
  <Provider store={store}>
    <Application />
  </Provider>
);
const root = document.createElement("div");
document.body.appendChild(root);

render(<Root />, root);
