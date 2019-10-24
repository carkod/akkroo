import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from  './store';
import App from './containers/app';
import { initialState as attendeesInitialState } from './reducers/attendees-list';
import { initialState as guestInitialState } from './reducers/guest';

const initalState = {
  attendeesListReducer: attendeesInitialState,
  selectedGuestReducer: guestInitialState,
};

const store = configureStore(initalState);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  rootElement
)