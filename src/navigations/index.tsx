import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RouterName} from './router-name';
import {screenOptions} from './navigation-config';
import {isEmpty} from 'lodash';
import AuthStackNavigator from './auth-navigator';
import BottomTabNavigator from './bottom-navigator';

import {useSelector} from 'react-redux';
import {loginSelector} from '@src/redux/selectors';
import MyDrawer from './drawer-navigator';

const Stack = createStackNavigator();

function MainStackNavigator() {
  const loginResult = useSelector(loginSelector.loginResult);

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={
        !isEmpty(loginResult.accessToken)
          ? RouterName.drawerNavigator
          : RouterName.authStack
      }>
      <Stack.Screen
        name={RouterName.authStack}
        component={AuthStackNavigator}
      />
      <Stack.Screen name={RouterName.drawerNavigator} component={MyDrawer} />
    </Stack.Navigator>
  );
}
export default MainStackNavigator;
