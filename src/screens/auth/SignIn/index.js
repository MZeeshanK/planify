import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

const SignIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back!</Title>
      <Input placeholder="Email" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry />

      <Button>Login</Button>

      <Text style={styles.footerText}>
        Not Registered?
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={styles.footerLink}>
          {' '}
          Sign Up!
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default React.memo(SignIn);