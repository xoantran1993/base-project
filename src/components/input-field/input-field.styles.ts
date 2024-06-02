import {TextStyle, ViewStyle} from 'react-native';
import {Colors} from '@src/utils/colors';

export const inputGroupStyle: ViewStyle = {
  borderColor: Colors.lightGrey,
  flexDirection: 'row',
  borderWidth: 1,
  borderRadius: 12,
  paddingHorizontal: 16,
  height: 44,
  backgroundColor: Colors.white,
};

export const inputGroupErrorStyle: ViewStyle = {
  borderColor: Colors.baseRed,
};

export const inputGroupDisabledStyle: ViewStyle = {
  borderColor: Colors.lighterGrey,
  backgroundColor: Colors.lightestGrey,
};

export const inputGroupFocusedStyle: ViewStyle = {
  borderColor: Colors.midGrey,
};

export const inputFieldStyle: ViewStyle = {
  flex: 1,
};

export const inputControlStyle: TextStyle = {
  color: Colors.almostBlackGrey,
  minHeight: 0,
  paddingTop: 11,
  paddingBottom: 0,
};

export const inputControlDisabledStyle: TextStyle = {
  color: Colors.midGrey,
  backgroundColor: 'transparent',
};

export const inputIconStyle: ViewStyle = {
  justifyContent: 'center',
};

export const searchIconStyle: ViewStyle = {
  marginLeft: 5,
  marginRight: 10,
  marginTop: 12,
};

export const searchIconContainer: ViewStyle = {
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  height: 44,
};

export const searchDeleteStyle: ViewStyle = {
  position: 'absolute',
  zIndex: 99,
};
