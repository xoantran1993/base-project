import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '@src/pages/login/screen';
import {RouterName} from './router-name';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouterName.loginPage} component={LoginPage} />
    </Stack.Navigator>
  );
}
export default MainStackNavigator;
