import React, {useMemo, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {EyeShow, EyeHide} from '@src/assets/icon';

import {InputFieldProps} from './input-field.props';
import * as styles from './input-field.styles';
import {TextField} from '@src/elements/text-field/text-field';
import {Colors} from '@src/utils/colors';

export const InputField = (props: InputFieldProps) => {
  // Props
  const {
    value = '',
    passwordReveal,
    highlightOnFocused,
    textContentType,
    trim,
    isInvalid,
    isDisabled,
    isFocused,
    onFocus,
    onBlur,
    onChangeText,
    placeHolderValue,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  // Show password reveal icon
  const showPasswordReveal = useMemo(() => {
    return passwordReveal && value?.length > 0;
  }, [passwordReveal, value]);

  return (
    <View
      style={{
        ...styles.inputGroupStyle,
        ...(highlightOnFocused && (focused || isFocused)
          ? styles.inputGroupFocusedStyle
          : {}),
        ...(isInvalid ? styles.inputGroupErrorStyle : {}),
        ...(isDisabled ? styles.inputGroupDisabledStyle : {}),
      }}>
      {/* Input control */}
      <TextField
        style={styles.inputFieldStyle}
        inputStyle={{
          ...styles.inputControlStyle,
          ...(isDisabled ? styles.inputControlDisabledStyle : {}),
        }}
        placeholderTextColor={Colors.midGrey}
        secureTextEntry={textContentType === 'password' ? !showPassword : false}
        preset="noMargin"
        editable={!isDisabled}
        allowFontScaling={false}
        {...props}
        onBlur={(e: any) => {
          setFocused(false);

          onBlur && onBlur(e);
        }}
        onFocus={(e: any) => {
          setFocused(true);

          onFocus && onFocus(e);
        }}
        onChangeText={(e: string) => {
          const val = trim && e ? e.trim() : e;

          onChangeText && onChangeText(val);
        }}
        placeholder={placeHolderValue}
      />

      {/* Password reveal */}
      {showPasswordReveal ? (
        <TouchableOpacity
          style={styles.inputIconStyle}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <EyeHide fill={Colors.grey00000073} width={20} height={20} />
          ) : (
            <EyeShow fill={Colors.grey00000073} width={20} height={20} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default InputField;
