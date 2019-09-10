import "react-hot-loader";
import "core-js/stable";
import "regenerator-runtime/runtime";
import React, { ReactElement } from "react";
import { Provider } from "react-redux";
import configureStore from "store";
import { render } from "react-dom";
import Application from "view/Application";
import { getCachedState, cacheState } from "infra/cache";
import throttle from "lodash/throttle";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

const cachedState = getCachedState();
const store = configureStore(cachedState);
store.subscribe(
  throttle(() => {
    cacheState(store.getState());
  }, 1000),
);

const Root = (): ReactElement => (
  <Provider store={store}>
    <Application />
  </Provider>
);

const root = document.createElement("div");
document.body.appendChild(root);

render(<Root />, root);
