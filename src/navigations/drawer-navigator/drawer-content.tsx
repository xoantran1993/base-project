import React from 'react';
import {View, StyleSheet, Image, ImageStyle} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  AppIcon,
  CreditIcon,
  CustomerIcon,
  DomainIcon,
  InventoryIcon,
  Logo,
  NotificationIcon,
  ServiceIcon,
  StoreIcon,
} from '@src/assets/icon';
import {RouterName} from '../router-name';
import DrawerItem from './drawer-item';
import {Colors} from '@src/utils/colors';

const drawerIconStyles: ImageStyle = {
  tintColor: Colors.blackD9,
  marginRight: 10,
};

function DrawerContent(props: any) {
  const {navigation} = props;

  return (
    <View style={styles.flex1}>
      <DrawerContentScrollView {...props}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logoStyles}
            source={Logo}
            resizeMode={'contain'}
          />
        </View>
        <DrawerItem
          label="Stores"
          icon={
            <StoreIcon
              width={24}
              height={24}
              fill="currentColor"
              style={drawerIconStyles}
            />
          }
          onPress={() => {
            // navigation.navigate(RouterName.salesPage);
          }}
          style={styles.drawerItemStyles}
        />
        <DrawerItem
          label="Services"
          icon={
            <ServiceIcon
              width={24}
              height={24}
              fill="currentColor"
              style={drawerIconStyles}
            />
          }
          onPress={() => {
            // navigation.navigate(RouterName.salesPage);
          }}
          style={styles.drawerItemStyles}
        />
        <DrawerItem
          label="Apps"
          icon={
            <AppIcon
              width={24}
              height={24}
              fill="none"
              style={drawerIconStyles}
            />
          }
          onPress={() => {
            // navigation.navigate(RouterName.salesPage);
          }}
          style={styles.drawerItemStyles}
        />
        <DrawerItem
          label="Customers"
          icon={
            <CustomerIcon
              width={24}
              height={24}
              fill="currentColor"
              style={drawerIconStyles}
            />
          }
          onPress={() => {
            // navigation.navigate(RouterName.salesPage);
          }}
          style={styles.drawerItemStyles}
        />
        <DrawerItem
          label="Inventory"
          icon={
            <InventoryIcon
              width={24}
              height={24}
              fill="none"
              style={drawerIconStyles}
            />
          }
          onPress={() => {
            // navigation.navigate(RouterName.salesPage);
          }}
          style={styles.drawerItemStyles}
        />
        <DrawerItem
          label="Notifications"
          icon={
            <NotificationIcon
              width={24}
              height={24}
              fill="currentColor"
              style={drawerIconStyles}
            />
          }
          onPress={() => {
            // navigation.navigate(RouterName.salesPage);
          }}
          style={styles.drawerItemStyles}
        />
        <DrawerItem
          label="Credits"
          icon={
            <CreditIcon
              width={24}
              height={24}
              fill="none"
              style={drawerIconStyles}
            />
          }
          onPress={() => {
            // navigation.navigate(RouterName.salesPage);
          }}
          style={styles.drawerItemStyles}
        />
        <DrawerItem
          label="Domain"
          icon={
            <DomainIcon
              width={24}
              height={24}
              fill="none"
              style={drawerIconStyles}
            />
          }
          onPress={() => {
            // navigation.navigate(RouterName.salesPage);
          }}
          style={styles.drawerItemStyles}
        />
      </DrawerContentScrollView>
    </View>
  );
}
export default DrawerContent;

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  logoStyles: {
    height: 50,
    width: '80%',
  },
  drawerItemStyles: {
    paddingHorizontal: 16,
  },
});
