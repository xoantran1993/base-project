/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {RouterName} from '../router-name';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OverviewPage from '@src/pages/overview/screen';
import SalePage from '@src/pages/sales/screen';
import PaymentPage from '@src/pages/payments/screen';
import ShipmentPage from '@src/pages/shipments/screen';
import {TabName} from '@src/utils/strings';
import {
  OverviewIcon,
  SaleIcon,
  ShipmentIcon,
  PaymentIcon,
} from '@src/assets/icon';
import {TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {bottomTabOptions} from '../navigation-config';
import {Colors} from '@src/utils/colors';
import {typography} from '@src/utils/utils';

const tabBarLabelStyle: TextStyle = {
  fontSize: 13,
  textTransform: 'none',
  textAlignVertical: 'center',
  fontFamily: typography.regular,
};

const tabBarIconStyle: ViewStyle = {
  marginTop: 4,
};

const tabBarIconTintColorActive: ImageStyle = {
  tintColor: Colors.redE1092A,
};

const tabBarIconTintColorInActive: ImageStyle = {
  tintColor: Colors.blackD9,
};

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={bottomTabOptions}>
      <BottomTab.Screen
        name={RouterName.overviewPage}
        component={OverviewPage}
        options={{
          tabBarLabel: TabName.overview,
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIconStyle: tabBarIconStyle,
          tabBarIcon({focused}) {
            return focused ? (
              <OverviewIcon
                fill="currentColor"
                style={tabBarIconTintColorActive}
              />
            ) : (
              <OverviewIcon
                fill="currentColor"
                style={tabBarIconTintColorInActive}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={RouterName.salesPage}
        component={SalePage}
        options={{
          tabBarLabel: TabName.sale,
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIconStyle: tabBarIconStyle,
          tabBarIcon: function renderFocused({focused}) {
            return focused ? (
              <SaleIcon fill="currentColor" style={tabBarIconTintColorActive} />
            ) : (
              <SaleIcon
                fill="currentColor"
                style={tabBarIconTintColorInActive}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={RouterName.shipmentPage}
        component={ShipmentPage}
        options={{
          tabBarLabel: TabName.shipments,
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIconStyle: tabBarIconStyle,
          tabBarIcon: function renderFocused({focused}) {
            return focused ? (
              <ShipmentIcon
                fill="currentColor"
                style={tabBarIconTintColorActive}
              />
            ) : (
              <ShipmentIcon
                fill="currentColor"
                style={tabBarIconTintColorInActive}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name={RouterName.paymentPage}
        component={PaymentPage}
        options={{
          tabBarLabel: TabName.payments,
          tabBarLabelStyle: tabBarLabelStyle,
          tabBarIconStyle: tabBarIconStyle,
          tabBarIcon: function renderFocused({focused}) {
            return focused ? (
              <PaymentIcon
                fill="currentColor"
                style={tabBarIconTintColorActive}
              />
            ) : (
              <PaymentIcon
                fill="currentColor"
                style={tabBarIconTintColorInActive}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
