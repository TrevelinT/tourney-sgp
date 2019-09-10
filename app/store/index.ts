import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./ducks/sagas";

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(persistedState: AppState): Store {
  const saga = createSagaMiddleware();
  const middlewares = [logger, saga];
  const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
  saga.run(rootSaga);

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", (): void =>
      store.replaceReducer(rootReducer),
    );
  }

  return store;
}
