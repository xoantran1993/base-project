import {TextFieldProps} from '@src/elements/text-field/text-field';

export interface InputFieldProps extends TextFieldProps {
  value?: string;
  highlightOnFocused?: boolean;
  passwordReveal?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isFocused?: boolean;
  // Auto trim value on change
  trim?: boolean;
  // Search field flag and deletion action
  search?: boolean;
  onSearchClear?: () => void;
  placeHolderValue?: string;
  isShowClearAll?: boolean;
  customLeftIconActive?: any;
  customLeftIconInActive?: any;
}
