declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const __svg__: unique symbol;
  const content: React.FC<SvgProps> & {__ext__: typeof __svg__};
  export default content;
}
