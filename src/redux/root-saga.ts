import {all, fork} from 'redux-saga/effects';
import {watchLoginSaga} from './saga';
export default function* rootSaga() {
  console.log('root saga');
  yield all([fork(watchLoginSaga)]);
}
