import React, {useState} from 'react';
import {Linking, SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';
import CheckBox from '../../../components/CheckBox';
import {
  PRIVACY_POLICY_LINK,
  TERMS_OF_SERVICE_LINK,
} from '../../../constants/links';

const SignUp = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);

  const onCheckBoxPress = () => {
    setAgreed(val => !val);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join the hub!</Title>

      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />
      <Input placeholder="Confirm Password" secureTextEntry />

      <View style={styles.row}>
        <CheckBox onPress={onCheckBoxPress} isChecked={agreed} />

        <Text style={styles.termText}>
          I agree to the
          <Text
            onPress={() => onLinkPress(TERMS_OF_SERVICE_LINK)}
            style={styles.termLink}>
            {' '}
            Terms and Conditions
          </Text>{' '}
          and
          <Text
            onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}
            style={styles.termLink}>
            {' '}
            Privacy Policy
          </Text>
          .
        </Text>
      </View>

      <Button type="blue">Create New Account</Button>

      <Text style={styles.footerText}>
        Already Registered?
        <Text
          onPress={() => navigation.navigate('SignIn')}
          style={styles.footerLink}>
          {' '}
          Sign In!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
