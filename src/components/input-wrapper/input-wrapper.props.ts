import {ViewStyle} from 'react-native';

export interface InputWrapperProps {
  style?: ViewStyle;

  label?: string;
  labelTx?: string;

  helpText?: string;
  helpTextTx?: string;

  isInvalid?: boolean;
  isDisabled?: boolean;
  numberOfLinesError?: number;

  textStyleDisabled?: any;
  labelStyleProps?: any;
}
