import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import MainStackNavigator from './src/navigations/main-stack-navigation';

export const navigationRef = createNavigationContainerRef();

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <MainStackNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
