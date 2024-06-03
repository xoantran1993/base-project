import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const SalePage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Sales Page</Text>
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
export default SalePage;
