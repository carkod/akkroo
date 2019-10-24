import { 
  GET_ATTENDEES_ERROR, 
  GET_ATTENDEES_REQUEST, 
  GET_ATTENDEES_SUCCESS, 
 } from './constants';

export const getAttendeesRequestAction = () => ({
  type: GET_ATTENDEES_REQUEST
});

export const getAttendeesSuccessAction = (guestList) => ({
  type: GET_ATTENDEES_SUCCESS,
  payload: {
    guestList
  }
});

export const getAttendeesErrorAction = (msg) => ({
  type: GET_ATTENDEES_ERROR,
  payload: {
    msg
  }
});
