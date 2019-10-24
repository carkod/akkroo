import { all } from 'redux-saga/effects';
import { watchGetGuestList } from './attendees';



const sagaFactory = api => {

  return function* rootSaga() {
    yield all([watchGetGuestList(api)]);
 };
};

export default sagaFactory;