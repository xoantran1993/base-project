import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

const ShipmentPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>Shipment Page</Text>
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
export default ShipmentPage;
