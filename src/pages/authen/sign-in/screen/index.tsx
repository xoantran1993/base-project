import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {FbIcon, Logo, GGIcon, AppleIcon} from '@src/assets/icon';
import {Colors} from '@src/utils/colors';
import {Strings} from '@src/utils/strings';
import {Text} from '@src/elements/text';
import {InputWrapper} from '@src/components/input-wrapper';
import {InputField} from '@src/components/input-field';
import {typography} from '@src/utils/utils';
import {useSignIn} from './sign-in-hook';
import {useForm, Controller} from 'react-hook-form';
import {isEmpty} from 'lodash';

const SignInPage = () => {
  const {onLogin} = useSignIn();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email: 'ichigo2603@gmail.com',
      password: '12345az@',
    },
  });

  return (
    <SafeAreaView style={styles.flex1}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoStyles}
              source={Logo}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.loginContainer}>
            <Text
              text={Strings.signInLable}
              style={styles.signInLableStyles}
              preset={'bodyTextBold'}
            />
            <Controller
              control={control}
              rules={{
                required: 'Email is required',
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <InputWrapper
                  style={styles.emailInputStyles}
                  isInvalid={
                    !isEmpty(errors.email) && !isEmpty(errors?.email.message)
                  }
                  helpText={errors.email && errors?.email.message}>
                  <InputField
                    returnKeyType="next"
                    textContentType="emailAddress"
                    placeHolderValue={Strings.email}
                    value={value}
                    trim={true}
                    onBlur={onBlur}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={onChange}
                    maxLength={50}
                    isInvalid={
                      !isEmpty(errors.email) && !isEmpty(errors?.email.message)
                    }
                  />
                </InputWrapper>
              )}
              name="email"
            />
            <Controller
              control={control}
              rules={{
                required: 'Password is required',
              }}
              render={({field: {onChange, onBlur, value}, formState}) => (
                <InputWrapper
                  style={styles.passwordInput}
                  helpText={
                    formState.errors.password &&
                    formState.errors.password.message
                  }
                  isInvalid={
                    !isEmpty(errors.password) &&
                    !isEmpty(errors?.password.message)
                  }>
                  <InputField
                    value={value}
                    returnKeyType="next"
                    textContentType="password"
                    placeHolderValue={Strings.password}
                    passwordReveal={true}
                    onBlur={onBlur}
                    trim={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={onChange}
                    maxLength={50}
                    isInvalid={
                      !isEmpty(errors.password) &&
                      !isEmpty(errors?.password.message)
                    }
                  />
                </InputWrapper>
              )}
              name="password"
            />

            <TouchableOpacity style={styles.forgotPasswordStyles}>
              <Text
                text={Strings.forgotPassword}
                style={styles.forgotPasswordTextStyles}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signInButtonContainer}
              onPress={handleSubmit(onLogin)}>
              <Text
                text={Strings.signIn}
                style={styles.signInBtnTextStyles}
                preset={'caption1Bold'}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                text={Strings.createAccount}
                style={styles.createAccountTextStyles}
              />
            </TouchableOpacity>
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLineStyles} />
              <Text
                text={'OR'}
                style={styles.orTextStyles}
                preset={'bodyTextBold'}
              />
              <View style={styles.dividerLineStyles} />
            </View>
            {Platform.OS === 'ios' ? (
              <TouchableOpacity style={styles.signInAppleButton}>
                <View style={styles.leftIconSignInContainer}>
                  <AppleIcon width={28} height={28} />
                </View>
                <Text
                  text={Strings.appleSignIn}
                  preset={'caption1Bold'}
                  style={styles.signInAppleTextStyles}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.signInGGButton}>
                <View style={styles.leftIconSignInContainer}>
                  <GGIcon width={28} height={28} />
                </View>
                <Text
                  text={Strings.ggSignIn}
                  preset={'caption1Bold'}
                  style={styles.signInGGTextStyles}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.signInFbButton}>
              <View style={styles.leftIconSignInContainer}>
                <FbIcon width={28} height={28} />
              </View>
              <Text
                text={Strings.fbSignIn}
                preset={'caption1Bold'}
                style={styles.signInFbTextStyles}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.helpAuthContainer}>
            <Text text={Strings.helpAuth} preset="caption1Regular" />
            <Text
              text={Strings.contactUs}
              style={styles.contactUsText}
              preset="caption1Regular"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
  },
  logoContainer: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: 32,
  },
  logoStyles: {
    height: 50,
    width: 220,
  },
  loginContainer: {
    justifyContent: 'center',
    width: '100%',
    borderRadius: 16,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 24,
    ...Platform.select({
      ios: {
        shadowRadius: 4,
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 2},
      },
      android: {
        elevation: 3,
      },
    }),
  },
  emailInputStyles: {
    width: '100%',
    marginBottom: 10,
  },
  passwordInput: {
    width: '100%',
    marginBottom: 0,
  },
  signInButtonContainer: {
    height: 44,
    width: '100%',
    backgroundColor: Colors.blueDart,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 38,
    marginBottom: 12,
  },
  signInBtnTextStyles: {
    color: Colors.white,
    fontFamily: typography.semibold,
  },
  signInLableStyles: {
    marginBottom: 12,
    fontSize: 14,
    fontFamily: typography.semibold,
  },
  forgotPasswordStyles: {
    marginTop: 12,
  },
  forgotPasswordTextStyles: {
    color: Colors.blueDart,
    fontFamily: typography.regular,
  },
  createAccountTextStyles: {
    color: Colors.blueDart,
    fontFamily: typography.regular,
  },
  dividerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  dividerLineStyles: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.black06,
  },
  orTextStyles: {
    marginHorizontal: 16,
    fontSize: 14,
  },
  helpAuthContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
  },
  contactUsText: {
    color: Colors.blueDart,
  },
  signInFbButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 48,
    backgroundColor: Colors.white,
    borderColor: Colors.blue1877F2,
    borderWidth: 1,
    marginTop: 8,
  },
  signInFbTextStyles: {
    color: Colors.blue1877F2,
    fontFamily: typography.semibold,
  },
  signInAppleTextStyles: {
    color: Colors.black,
    fontFamily: typography.semibold,
  },
  signInGGTextStyles: {
    color: Colors.black8A,
  },
  leftIconSignInContainer: {
    position: 'absolute',
    left: 15,
  },
  signInAppleButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 48,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
  },
  signInGGButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 48,
    borderColor: Colors.greyd9d9d9,
    borderWidth: 1,
  },
});
export default SignInPage;
