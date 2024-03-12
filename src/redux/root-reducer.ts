import {combineReducers} from 'redux';
import LoginSlice from '../pages/login/login-redux-saga/login-slice';
const rootReducers = combineReducers({
  loginReducer: LoginSlice.reducer,
});
export default rootReducers;
