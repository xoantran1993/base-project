import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {RouterName} from '../router-name';
import DrawerContent from './drawer-content';
import BottomTabNavigator from '../bottom-navigator';
import {View} from 'react-native';
import SignInPage from '@src/pages/authen/sign-in/screen';
import SalePage from '@src/pages/sales/screen';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{header: () => <View />}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={RouterName.bottomStack}
        component={BottomTabNavigator}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
