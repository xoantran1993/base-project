import {ArrowRightIcon} from '@src/assets/icon';
import {Text} from '@src/elements/text';
import {Colors} from '@src/utils/colors';
import {typography} from '@src/utils/utils';
import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageStyle,
  ScrollView,
} from 'react-native';
import HeaderComponent from '../component/header-component';
import {Strings} from '@src/utils/strings';
import {Platform} from 'react-native';
import OrderItemComponent from '../component/order-item';
const arrowIconTintColor: ImageStyle = {
  tintColor: Colors.blueDart,
};

const OverviewPage = () => {
  return (
    <SafeAreaView style={styles.flex1}>
      <HeaderComponent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text
            text="Hello Anh Thư Phạm"
            style={{
              color: Colors.blackD9,
              fontSize: 24,
              fontFamily: typography.semibold,
            }}
          />
          <Text
            text="Welcome back 👋"
            style={{
              color: Colors.blackD9,
              fontSize: 30,
              fontFamily: typography.semibold,
            }}
          />
          <View style={styles.dashboardContainer}>
            <Image
              source={{
                uri: 'https://dashboard-stg.sellonboard.com/static/media/overview_card.58403984129ad9d796fc.png',
              }}
              style={{width: 173, height: 173, position: 'absolute', right: 0}}
            />
            <Text
              text="Active Plan PRO"
              style={{
                color: Colors.white,
                fontFamily: typography.bold,
                fontSize: 20,
              }}
            />
            <Text
              text="Active on sat, Nov 4, 2023 for INR 1770/month"
              style={{
                color: Colors.white,
                fontFamily: typography.semibold,
                fontSize: 14,
                width: '50%',
              }}
            />
            <View style={styles.dashboardContent}>
              <View
                style={{
                  borderBottomWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  paddingVertical: 16,
                  borderBottomColor: Colors.black06,
                }}>
                <Text
                  text="Next Chargr for Pro - monthly due on Tue, Dec 31, 2024 for INR 1770/month"
                  style={{
                    color: Colors.blueDart,
                    fontFamily: typography.semibold,
                    fontSize: 14,
                  }}
                />
                <View
                  style={{
                    marginTop: 16,
                    padding: 8,
                    borderRadius: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Colors.blueDart,
                  }}>
                  <Text
                    text="Manage Plan"
                    style={{
                      fontSize: 14,
                      fontFamily: typography.semibold,
                      color: Colors.white,
                    }}
                  />
                </View>
              </View>

              <View style={styles.dashboardBottomContent}>
                <Text
                  text="View payment history"
                  style={{
                    color: Colors.blueDart,
                    fontFamily: typography.semibold,
                    fontSize: 14,
                  }}
                />
                <ArrowRightIcon
                  fill="none"
                  style={arrowIconTintColor}
                  width={14}
                  height={14}
                />
              </View>
            </View>
          </View>
          <View style={styles.orderContainer}>
            <Text preset="h2Tabs" text={Strings.order} />
            <View style={styles.lineStyles} />
            <OrderItemComponent
              count={0}
              descriptionText={'Not paid, to be shipped'}
              buttonText={'Open to process'}
              countContentStyles={styles.shippedAwaitingPaymentCount}
              textCountStyles={styles.textShippedAwaitingPaymentCount}
            />
            <OrderItemComponent
              count={0}
              descriptionText={'Paid, to be shipped'}
              buttonText={'Open to process'}
              countContentStyles={styles.shippedPaidCount}
              textCountStyles={styles.textShippedPaidCount}
            />
            <OrderItemComponent
              count={0}
              descriptionText={'Fullfilment in process'}
              buttonText={'Open to ship'}
              countContentStyles={styles.processingCount}
              textCountStyles={styles.textProcessingCount}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  flex1: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 12,
    backgroundColor: Colors.whiteF9F9FD,
  },
  dashboardContainer: {
    width: '100%',
    backgroundColor: Colors.blueDart,
    borderRadius: 20,
    padding: 24,
    marginTop: 24,
  },
  dashboardContent: {
    width: '100%',
    height: 'auto',
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  dashboardBottomContent: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  orderContainer: {
    marginTop: 24,
    padding: 24,
    borderWidth: 1,
    borderColor: Colors.whiteF0F0F0,
    backgroundColor: Colors.white,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowRadius: 4,
        shadowOpacity: 0.08,
        shadowOffset: {width: 2, height: 2},
      },
      android: {
        elevation: 3,
      },
    }),
  },
  lineStyles: {
    width: '100%',
    height: 1,
    marginVertical: 24,
    backgroundColor: Colors.black06,
  },
  shippedAwaitingPaymentCount: {
    backgroundColor: Colors.pinkF6e1e4,
  },
  textShippedAwaitingPaymentCount: {
    color: Colors.redE1092A,
  },
  shippedPaidCount: {
    backgroundColor: Colors.greenF0faf0,
  },
  textShippedPaidCount: {
    color: Colors.green65b569,
  },
  processingCount: {
    backgroundColor: Colors.orangeFfe4bc,
  },
  textProcessingCount: {
    color: Colors.orangeF46615,
  }
});
export default OverviewPage;
