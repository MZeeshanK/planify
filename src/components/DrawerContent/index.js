import React from 'react';
import { Linking, Text, StyleSheet } from 'react-native';

import { DrawerContentScrollView } from '@react-navigation/drawer';

import auth from '@react-native-firebase/auth';

import colors from '../../constants/colors';
import {
  PRIVACY_POLICY_LINK,
  TERMS_OF_SERVICE_LINK,
} from '../../constants/links';

const DrawerContent = props => {
  const { navigation } = props;

  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.link} onPress={() => navigation.navigate('Home')}>
        Home
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Tasks')}>
        Tasks
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('AddTask')}>
        Add Task
      </Text>
      <Text
        style={styles.link}
        onPress={() => onLinkPress(TERMS_OF_SERVICE_LINK)}>
        Term And Conditions
      </Text>
      <Text
        style={styles.link}
        onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
        Privacy Policy
      </Text>
      <Text style={styles.link} onPress={logout}>
        Log Out
      </Text>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  link: {
    color: colors.black,
    fontSize: 13,
    fontWeight: '500',
    margin: 8,
  },
});

export default React.memo(DrawerContent);
