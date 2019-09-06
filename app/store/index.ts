import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import middlewares from "./middlewares";
import rootReducer from "./reducers";

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(): Store {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", (): void =>
      store.replaceReducer(rootReducer),
    );
  }

  return store;
}
