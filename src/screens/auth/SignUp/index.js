import React, {useState} from 'react';
import {
  Alert,
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
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
  const [values, setValues] = useState({});

  const onCheckBoxPress = () => {
    setAgreed(val => !val);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    if (!values.first_name || !values.last_name) {
      Alert.alert('Please enter First Name and Last Name');
      return;
    }

    if (values.password !== values.confirm_password) {
      Alert.alert('Passwords do not match');
      return;
    }

    if (!agreed) {
      Alert.alert('You need to agree to the terms and conditions');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        auth().currentUser.updateProfile({
          displayName: `${values.first_name} ${values.last_name}`,
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  console.log(values);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Join the hub!</Title>

        <Input
          onChangeText={val => onChange(val, 'first_name')}
          placeholder="First Name"
        />
        <Input
          onChangeText={val => onChange(val, 'last_name')}
          placeholder="Last Name"
        />
        <Input
          onChangeText={val => onChange(val, 'email')}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          onChangeText={val => onChange(val, 'password')}
          placeholder="Password"
          secureTextEntry
        />
        <Input
          onChangeText={val => onChange(val, 'confirm_password')}
          placeholder="Confirm Password"
          secureTextEntry
        />

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

        <Button onPress={onSubmit} type="blue">
          Create New Account
        </Button>

        <Text style={styles.footerText}>
          Already Registered?
          <Text
            onPress={() => navigation.navigate('SignIn')}
            style={styles.footerLink}>
            {' '}
            Sign In!
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(SignUp);
