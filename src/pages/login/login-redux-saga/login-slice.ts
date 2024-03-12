import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loginLoading: false,
  loginResult: {
    isSuccess: false,
    accessToken: null,
    statusCode: -1,
  },
  loginError: false,
};
const LoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    loginRequest: state => {
      return {
        ...state,
        loginLoading: true,
        loginResult: {
          isSuccess: false,
          accessToken: null,
          statusCode: -1,
        },
        loginError: false,
      };
    },
    loginSuccess: (state, action) => {
      return {
        ...state,
        loginLoading: false,
        loginResult: {
          isSuccess: true,
          accessToken: action.payload,
          statusCode: 200,
        },
        loginError: false,
      };
    },
    loginFailure: state => {
      return {
        ...state,
        loginLoading: false,
        loginResult: {
          isSuccess: false,
          accessToken: null,
          statusCode: 500,
        },
        loginError: true,
      };
    },
  },
});

export const loginActions = LoginSlice.actions;
export default LoginSlice;
