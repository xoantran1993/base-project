import React from 'react';
import {View, StyleSheet, ImageStyle, TouchableOpacity} from 'react-native';
import {HambugerIcon, LogoutIcon} from '@src/assets/icon';
import {Colors} from '@src/utils/colors';
import {Text} from '@src/elements/text';
import {Strings} from '@src/utils/strings';
import {typography} from '@src/utils/utils';
import {useNavigation} from '@react-navigation/native';

const hambugerIconStyles: ImageStyle = {
  tintColor: Colors.blueDart,
};

const HeaderComponent = () => {
  const navigation = useNavigation<any>();

  const menuOnPress = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={menuOnPress}>
        <HambugerIcon
          width={24}
          height={24}
          fill="currentColor"
          style={hambugerIconStyles}
        />
      </TouchableOpacity>
      <Text
        text={Strings.menu}
        style={styles.menuTextStyles}
        numberOfLines={1}
      />
      <TouchableOpacity>
        <View style={styles.leftHeaderContainer}>
          <LogoutIcon
            width={24}
            height={24}
            fill="currentColor"
            style={hambugerIconStyles}
          />
          <Text text={Strings.logout} style={styles.logoutTextStyles} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuTextStyles: {
    flex: 1,
    fontFamily: typography.bold,
    fontSize: 16,
    color: Colors.blueDart,
    paddingHorizontal: 8,
  },
  logoutTextStyles: {
    fontFamily: typography.semibold,
    fontSize: 16,
    color: Colors.blueDart,
    marginLeft: 8,
  },
  leftHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HeaderComponent;
