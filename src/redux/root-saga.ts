import {all} from 'redux-saga/effects';
export default function* rootSaga() {
  console.log('root saga');
  yield all([]);
}
