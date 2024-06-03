import {typography} from '@src/utils/utils';
import {TextStyle, Platform} from 'react-native';

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontSize: 15,
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,

  /**
   * A bold version of the default text.
   */
  bold: {...BASE, fontWeight: 'bold'} as TextStyle,

  /**
   * Large headers.
   */
  header: {...BASE, fontSize: 24, fontWeight: 'bold'} as TextStyle,

  /**
   * Field labels that appear on forms above the inputs.
   */
  fieldLabel: {...BASE, fontSize: 13} as TextStyle,

  /**
   * A smaller piece of secondard information.
   */
  secondary: {...BASE, fontSize: 9} as TextStyle,

  /**
   * CAG Text Presets
   */
  h4: {
    ...BASE,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: 1.08,
    textTransform: 'uppercase',
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
  } as TextStyle,

  caption1Regular: {
    ...BASE,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'left',
    textAlignVertical: 'top',
    fontStyle: 'normal',
    fontWeight: '400',
    letterSpacing: 0,
    fontFamily: typography.regular,
  } as TextStyle,

  caption1Italic: {
    ...BASE,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'left',
    textAlignVertical: 'top',
    fontWeight: '400',
    letterSpacing: 0,
  } as TextStyle,

  caption1BoldItalic: {
    ...BASE,
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'left',
    textAlignVertical: 'top',
    fontWeight: '700',
    letterSpacing: 0,
  } as TextStyle,

  XSmallBold: {
    ...BASE,
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
    fontSize: 11,
    lineHeight: 14,
  } as TextStyle,

  XSmallRegular: {
    ...BASE,
    fontSize: 11,
    lineHeight: 14,
    fontStyle: 'normal',
    fontWeight: '400',
  } as TextStyle,

  caption2Regular: {
    ...BASE,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
  } as TextStyle,

  caption2Italic: {
    ...BASE,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    letterSpacing: 0,
    textAlign: 'left',
  } as TextStyle,

  caption2Bold: {
    fontSize: 12,
    lineHeight: 16,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
  } as TextStyle,

  bodyTextBold: {
    ...BASE,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    textAlignVertical: 'top',
    fontStyle: 'normal',
    letterSpacing: 0,
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
  } as TextStyle,

  subTitleBold: {
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
    fontSize: 18,
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'left',
  } as TextStyle,

  bodyTextRegular: {
    ...BASE,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    textAlignVertical: 'top',
    fontStyle: 'normal',
    letterSpacing: 0,
    fontWeight: '400',
  } as TextStyle,

  bodyTextItalic: {
    ...BASE,
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'left',
    textAlignVertical: 'top',
    letterSpacing: 0,
    fontWeight: '400',
  } as TextStyle,

  bodyTextBlackRegular: {
    ...BASE,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'left',
    textAlignVertical: 'top',
    fontStyle: 'normal',
    letterSpacing: 0,
    fontWeight: '400',
  } as TextStyle,

  textLink: {
    ...BASE,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
  } as TextStyle,

  caption1Bold: {
    ...BASE,
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
    lineHeight: 18,
    textAlign: 'center',
  } as TextStyle,

  h3: {
    ...BASE,
    fontSize: 20,
    lineHeight: 22,
    textAlign: 'left',
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
    letterSpacing: 0.005,
  } as TextStyle,

  h1: {
    ...BASE,
    fontSize: 28,
    lineHeight: 36,
    textAlign: 'left',
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
  } as TextStyle,

  h2: {
    ...BASE,
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'left',
    textAlignVertical: 'top',
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
    fontStyle: 'normal',
    letterSpacing: 0.006,
  } as TextStyle,

  h2Tabs: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'left',
    textAlignVertical: 'top',
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
    fontStyle: 'normal',
    letterSpacing: 0.006,
    textTransform: 'none',
  } as TextStyle,

  tabsSmall: {
    textTransform: 'none',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: Platform.select({ios: '700', android: 'normal'}),
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;
