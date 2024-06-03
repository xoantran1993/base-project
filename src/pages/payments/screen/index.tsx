import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {loginActions} from '@src/pages/authen/sign-in/login-redux-saga/login-slice';
import {useDispatch} from 'react-redux';
import {RouterName} from '@src/navigations/router-name';
import {useNavigation} from '@react-navigation/native';

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={async () => {
            dispatch(loginActions.resetLoginData());
            navigation.replace(RouterName.authStack);
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoStyles: {
    height: 100,
    width: 300,
  },
});
export default PaymentPage;
