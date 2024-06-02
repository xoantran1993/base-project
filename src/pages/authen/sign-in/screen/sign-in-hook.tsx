/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RouterName} from '@src/navigations/router-name';
import {loginActions} from '@src/pages/authen/sign-in/login-redux-saga/login-slice';
import {useEffect} from 'react';
import {loginSelector} from '@src/redux/selectors';

export const useSignIn = () => {
  const dispatch = useDispatch();
  const loginResult = useSelector(loginSelector.loginResult);
  const navigation = useNavigation<any>();

  useEffect(() => {
    if (loginResult.isSuccess && loginResult.statusCode === 200) {
      navigation.replace(RouterName.drawerNavigator);
    }
  }, [loginResult]);

  const onLogin = (data: {email: string; password: string}) => {
    const bodyData: any = {
      email: data.email,
      password: data.password,
    };
    dispatch(loginActions.loginRequest(bodyData));
    return null;
  };

  return {
    onLogin,
  };
};
