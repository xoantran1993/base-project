import {Platform} from 'react-native';

export const typography = {
  bold: Platform.select({ios: 'Poppins-Bold', android: 'Poppins-Bold'}),
  italic: Platform.select({ios: 'Poppins-Italic', android: 'Poppins-Italic'}),
  light: Platform.select({ios: 'Poppins-Light', android: 'Poppins-Light'}),
  lightItalic: Platform.select({
    ios: 'Poppins-LightItalic',
    android: 'Poppins-LightItalic',
  }),
  medium: Platform.select({ios: 'Poppins-Medium', android: 'Poppins-Medium'}),
  mediumItalic: Platform.select({
    ios: 'Poppins-MediumItalic',
    android: 'Poppins-MediumItalic',
  }),
  regular: Platform.select({
    ios: 'Poppins-Regular',
    android: 'Poppins-Regular',
  }),
  semibold: Platform.select({
    ios: 'Poppins-SemiBold',
    android: 'Poppins-SemiBold',
  }),
  thin: Platform.select({ios: 'Poppins-Thin', android: 'Poppins-Thin'}),
  thinItalic: Platform.select({
    ios: 'Poppins-ThinItalic',
    android: 'Poppins-ThinItalic',
  }),
};
