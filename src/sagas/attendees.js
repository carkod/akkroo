import { put, takeEvery } from 'redux-saga/effects';
import { data } from '../actions/data';
import { getAttendeesSuccessAction } from '../actions/attendees';
import { getAttendeesErrorAction } from '../actions/attendees';

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* getGuestList() {
  yield delay(1000)
  try {
    yield put(getAttendeesSuccessAction(data))
  } catch(err) {
    yield put(getAttendeesErrorAction('Error Loading Products...'))
  }
  
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetGuestList() {
  yield takeEvery('GET_ATTENDEES_REQUEST', getGuestList)
}