import React from 'react';
import {
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Text} from '../text/text';
import {mergeAll, flatten} from 'ramda';
import {TextPresets} from '../../elements/text/text.presets';
import {Colors} from '@src/utils/colors';

// the base styling for the TextInput
const INPUT: TextStyle = {
  minHeight: 44,
  fontSize: 18,
  backgroundColor: Colors.white,
  overflow: 'hidden',
};

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: {[name: string]: ViewStyle} = {
  default: {},
  noMargin: {
    paddingVertical: 0,
  },
};

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: string;

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string;

  /**
   * The Placeholder text color provide custom placeholder color.
   */
  placeholderColor?: string;

  /**
   * Show lable or hide label content
   */
  showLabel?: boolean;

  /**
   * The label i18n key.
   */
  labelTx?: string;

  /**
   * The label text if no labelTx is provided.
   */
  label?: string;

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: ViewStyle | ViewStyle[];

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: TextStyle | TextStyle[];

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS;

  /**
   *  Label presets
   */
  labelPreset?: TextPresets;
  /**
   *  Label Colors
   */
  labelTextColor?: string;

  forwardedRef?: any;
}

const enhance = (style: any, styleOverride: any) => {
  return mergeAll(flatten([style, styleOverride]));
};

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholder,
    placeholderColor,
    label,
    showLabel = false,
    labelTextColor,
    preset = 'default',
    style: styleOverride,
    inputStyle: inputStyleOverride,
    labelPreset,
    forwardedRef,
    ...rest
  } = props;
  let containerStyle: ViewStyle = {...PRESETS[preset]};
  containerStyle = enhance(containerStyle, styleOverride);

  let inputStyle: TextStyle = INPUT;
  inputStyle = enhance(inputStyle, inputStyleOverride);

  const labelTxColor: TextStyle = {
    color: labelTextColor,
  };

  return (
    <View style={containerStyle}>
      {showLabel && (
        <Text style={labelTxColor} preset={labelPreset} text={label} />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        multiline={false}
        underlineColorAndroid={Colors.transparent}
        {...rest}
        style={inputStyle}
        ref={forwardedRef}
        selectionColor={'#843ABF'}
      />
    </View>
  );
}
