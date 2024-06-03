import {all, call, put, takeLatest} from 'redux-saga/effects';
import ApiConfig from '@src/services/api-config';
import {post} from '@src/services/requests';
import {loginActions} from './login-slice';

function* handleLoginRequest(action: any): any {
  const {email, password} = action.payload;
  try {
    const body = {
      email: email,
      password: password,
    };
    const response = yield call(post, ApiConfig.login, body);
    if (response?.statusCode === 200 && response.success) {
      const payload = {
        success: response.success,
        statusCode: response.statusCode,
        accessToken: response?.data?.access_token,
      };
      yield put(loginActions.loginSuccess(payload));
    } else {
      const payload = {
        success: response.success,
        statusCode: response.statusCode,
      };
      yield put(loginActions.loginFailure(payload));
    }
  } catch (error) {
    const payload = {
      success: false,
      statusCode: 500,
    };
    yield put(loginActions.loginFailure(payload));
  }
}

export default function* watchLoginSaga() {
  yield all([takeLatest(loginActions.loginRequest, handleLoginRequest)]);
}
