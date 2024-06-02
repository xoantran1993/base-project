import {Colors} from '@src/utils/colors';
import {TextStyle, ViewStyle} from 'react-native';

export const containerStyle: ViewStyle = {
  marginBottom: 16,
};

export const labelStyle: TextStyle = {
  marginBottom: 10,
  color: Colors.almostBlackGrey,
};

export const labelErrorStyle: TextStyle = {
  color: Colors.baseRed,
};

export const labelDisabledStyle: TextStyle = {
  color: Colors.lightGrey,
};

export const helpTextContainerStyle: ViewStyle = {
  marginTop: 5,
  flexDirection: 'row',
};

export const helpTextStyle: TextStyle = {
  color: Colors.darkGrey,
};

export const helpTextErrorStyle: TextStyle = {
  marginLeft: 4,
  flex: 1,
  alignSelf: 'center',
  color: Colors.baseRed,
};
