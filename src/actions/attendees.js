import { 
  GET_ATTENDEES_ERROR, 
  GET_ATTENDEES_REQUEST, 
  GET_ATTENDEES_SUCCESS, 
  ADD_ATTENDEES_TO_EVENT, 
  ADD_ATTENDEES_TO_EVENT_ERROR,
  ADD_ATTENDEES_TO_EVENT_SUCCESS
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

export const addAttendeesToEventAction = (attendee) => ({
  type: ADD_ATTENDEES_TO_EVENT,
  payload: {
    attendee
  }
});

export const addAttendeesToEventErrorAction = (attendee) => ({
  type: ADD_ATTENDEES_TO_EVENT_ERROR,
  payload: {
    attendee
  }
});

export const addAttendeesToEventSuccessAction = (attendee) => ({
  type: ADD_ATTENDEES_TO_EVENT_SUCCESS,
  payload: {
    attendee
  }
});