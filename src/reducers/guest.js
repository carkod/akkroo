
import { EDIT_GUEST_SUCCESS, EDIT_GUEST_ERROR } from '../actions/constants';

export const initialState = {
  guest: {
    name: '',
    email: '',
    postcode: '',
    optIn: false,
  }
};

const selectedGuestReducer = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case EDIT_GUEST_SUCCESS:
      return {
        ...state,
      };
    case EDIT_GUEST_ERROR:
      return {
        ...state,
      };
    default:
      return state;
  }
};



export default selectedGuestReducer;