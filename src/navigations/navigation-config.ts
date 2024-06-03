import {TransitionPresets} from '@react-navigation/stack';
import {Colors} from '@src/utils/colors';

export const screenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  gestureEnabled: true,
  headerShown: false,
};

export const bottomTabOptions = {
  headerShown: false,
  tabBarActiveTintColor: Colors.redE1092A,
  tabBarInactiveTintColor: Colors.blackD9,
};
