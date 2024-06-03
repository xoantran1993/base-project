import {combineReducers} from 'redux';
import LoginSlice from '../pages/authen/sign-in/login-redux-saga/login-slice';
const rootReducers = combineReducers({
  loginReducer: LoginSlice.reducer,
});
export default rootReducers;
