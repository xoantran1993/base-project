import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {screenOptions} from '../navigation-config';
import {RouterName} from '../router-name';
import SignInPage from '@src/pages/authen/sign-in/screen';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={RouterName.signInPage}>
      <Stack.Screen name={RouterName.signInPage} component={SignInPage} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
