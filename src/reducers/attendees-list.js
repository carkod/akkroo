
import { GET_ATTENDEES_ERROR, GET_ATTENDEES_REQUEST, GET_ATTENDEES_SUCCESS } from '../actions/constants';

export const initialState = {
  isLoading: false,
  isError: false,
  guestList: []
};


const attendeesListReducer = (state = initialState, action = {type: ''}) => {
  switch(action.type) {
    case GET_ATTENDEES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false
      };

    case GET_ATTENDEES_SUCCESS:
      return {
        guestList: action.payload.guestList.guestList,
        isLoading: false,
        isError: false,
      }
    case GET_ATTENDEES_ERROR: 
      const msg = action.payload.msg;
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: msg
      }
    default:
      return state;
  }
}

export default attendeesListReducer;