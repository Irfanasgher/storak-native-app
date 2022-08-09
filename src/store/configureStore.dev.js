import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from "redux-devtools-extension";
// import { composeWithDevTools } from "remote-redux-devtools";
import {persistStore} from 'redux-persist';

import rootReducer from '../modules/rootReducer';
import rootSaga from '../modules/rootSaga';
// const composeEnhancers = composeWithDevTools({realtime: true, port: 8081});

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  const persistor = persistStore(store);
  return {store, persistor};
}
