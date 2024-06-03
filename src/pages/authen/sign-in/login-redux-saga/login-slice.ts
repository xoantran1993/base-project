import {createSlice} from '@reduxjs/toolkit';

export interface IloginResult {
  isSuccess: boolean;
  accessToken: string;
  statusCode: number;
}

export interface IloginState {
  loginLoading: boolean;
  loginResult: IloginResult;
  loginError: boolean;
}

const initialState: IloginState = {
  loginLoading: false,
  loginResult: {
    isSuccess: false,
    accessToken: '',
    statusCode: -1,
  },
  loginError: false,
};
const LoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    loginRequest: (state: IloginState) => {
      return {
        ...state,
        loginLoading: true,
        loginResult: {
          isSuccess: false,
          accessToken: '',
          statusCode: -1,
        },
        loginError: false,
      };
    },
    loginSuccess: (state: IloginState, action) => {
      const {success, statusCode, accessToken = ''} = action.payload;
      return {
        ...state,
        loginLoading: false,
        loginResult: {
          isSuccess: success,
          accessToken: accessToken,
          statusCode: statusCode,
        },
        loginError: false,
      };
    },
    loginFailure: (state: IloginState, action) => {
      const {success, statusCode} = action.payload;
      return {
        ...state,
        loginLoading: false,
        loginResult: {
          isSuccess: success,
          accessToken: '',
          statusCode: statusCode,
        },
        loginError: true,
      };
    },
    resetLoginData: (state: IloginState) => {
      return {
        ...state,
        loginLoading: false,
        loginResult: {
          isSuccess: false,
          accessToken: '',
          statusCode: -1,
        },
        loginError: false,
      };
    },
  },
});

export const loginActions = LoginSlice.actions;
export default LoginSlice;
