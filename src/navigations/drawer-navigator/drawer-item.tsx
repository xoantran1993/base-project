import {Text} from '@src/elements/text';
import {Colors} from '@src/utils/colors';
import {typography} from '@src/utils/utils';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ImageStyle,
} from 'react-native';

interface IDrawerItemProps {
  icon?: any;
  label?: string;
  onPress?: () => void;
  labelStyle?: any;
  style?: ViewStyle;
  iconStyles?: ImageStyle;
}

const DrawerItem = (props: IDrawerItemProps) => {
  const {icon, label, onPress, style, labelStyle} = props;
  let Icon = null;
  if (icon != null) {
    Icon = icon;
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[{...styles.itemContainer}, style]}>
        {icon && Icon}
        <Text
          text={label}
          style={[{...styles.labelItemStyles}, labelStyle]}
          numberOfLines={1}
          preset="bodyTextRegular"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelItemStyles: {
    color: Colors.blackD9,
    flex: 1,
    fontFamily: typography.regular,
  },
});

export default DrawerItem;
