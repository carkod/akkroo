import { combineReducers } from 'redux';
import attendeesListReducer from './attendees-list';
import selectedGuestReducer from './guest';

const rootReducer = 
combineReducers({
  attendeesListReducer,
  selectedGuestReducer,
})
export default rootReducer