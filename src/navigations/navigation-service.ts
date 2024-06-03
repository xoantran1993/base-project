import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef();
function navigate(name: string, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
function push(name: string, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, params));
  }
}
function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}
function reset(name: any) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [name],
    });
  }
}

function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef.popToTop();
  }
}

export const NavigationService = {
  navigate,
  goBack,
  reset,
  push,
  popToTop,
};
