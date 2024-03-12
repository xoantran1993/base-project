import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const LoginPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Login Page</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LoginPage;
