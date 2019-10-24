import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import { data } from './actions/data';
import sagaFactory from './sagas/index';

const saga = createSagaMiddleware();
export const API_ENDPOINT = 'http://staging-graphql-gateway.farmdrop.com/';

export default function configureStore( preloadedState ) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware( saga )
  );
  saga.run(sagaFactory(data.guestList));
  return store
}