import {Text} from '@src/elements/text';
import {Colors} from '@src/utils/colors';
import {Strings} from '@src/utils/strings';
import {typography} from '@src/utils/utils';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, ViewStyle} from 'react-native';

interface IOrderItemProps {
  count?: number;
  descriptionText: string;
  buttonText: string;
  countContentStyles?: ViewStyle;
  textCountStyles?: any;
  orderItemOnPress?: () => void;
}

const OrderItemComponent = (props: IOrderItemProps) => {
  const {
    count = 0,
    buttonText,
    descriptionText,
    countContentStyles,
    textCountStyles,
    orderItemOnPress,
  } = props;
  return (
    <View style={styles.itemContainer}>
      <View style={styles.orderCountView}>
        <View style={[{...styles.orderContent}, countContentStyles]}>
          <Text
            text={`${count} ${Strings.order}`}
            style={[{...styles.countOrderText}, textCountStyles]}
          />
        </View>
        <View style={styles.flex1} />
      </View>
      <Text text={descriptionText} style={styles.descriptionText} />
      <TouchableOpacity
        style={styles.orderButtonContainer}
        onPress={orderItemOnPress}>
        <Text text={buttonText} style={styles.buttonTextStyles} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  itemContainer: {
    marginBottom: 16,
  },
  countOrderText: {
    textAlign: 'left',
    fontFamily: typography.semibold,
  },
  descriptionText: {
    textAlign: 'left',
    fontFamily: typography.semibold,
    marginVertical: 8,
    color: Colors.blackD9,
  },
  orderButtonContainer: {
    height: 44,
    borderWidth: 1,
    borderColor: Colors.black06,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextStyles: {
    color: Colors.blueDart,
    fontFamily: typography.semibold,
  },
  orderCountView: {
    flexDirection: 'row',
  },
  orderContent: {
    padding: 5,
    borderRadius: 8,
  },
});

export default OrderItemComponent;
