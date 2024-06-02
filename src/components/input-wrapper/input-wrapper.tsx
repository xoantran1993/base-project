import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import {InputWrapperProps} from './input-wrapper.props';
import * as styles from './input-wrapper.styles';
import {Text} from '@src/elements/text';
import {isEmpty} from 'lodash';

export const InputWrapper = (props: PropsWithChildren<InputWrapperProps>) => {
  // Props
  const {
    label = '',
    labelStyleProps,
    isInvalid,
    isDisabled,
    helpText,
    helpTextTx,
    style,
    children,
    numberOfLinesError = 2,
    textStyleDisabled = {},
  } = props;

  return (
    <View style={{...styles.containerStyle, ...style}}>
      {/* Label */}

      {!isEmpty(label) ? (
        <Text
          preset="bodyTextBold"
          text={label}
          style={{
            ...styles.labelStyle,
            ...(isInvalid ? styles.labelErrorStyle : {}),
            ...(isDisabled
              ? {...styles.labelDisabledStyle, ...textStyleDisabled}
              : {}),
            ...labelStyleProps,
          }}
        />
      ) : null}

      {children}

      {/* Help text / Error message */}
      {helpText || helpTextTx ? (
        <View style={styles.helpTextContainerStyle}>
          <Text
            preset={'caption1Regular'}
            text={helpText}
            numberOfLines={numberOfLinesError}
            style={isInvalid ? styles.helpTextErrorStyle : styles.helpTextStyle}
          />
        </View>
      ) : null}
    </View>
  );
};

export default InputWrapper;
