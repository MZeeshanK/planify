import 'react-native-gesture-handler';

import React, { useState, useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';

import auth from '@react-native-firebase/auth';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Onboarding from './screens/auth/Onboarding';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';
import Home from './screens/app/Home';
import Tasks from './screens/app/Tasks';
import AddTask from './screens/app/AddTask';

import DrawerContent from './components/DrawerContent';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  const Tabs = () => {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('./assests/home_active.png')
                    : require('./assests/home_inactive.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('./assests/calendar_active.png')
                    : require('./assests/calendar_inactive.png')
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  if (user) {
    return (
      <Drawer.Navigator
        initialRouteName="Tabs"
        screenOptions={{ headerTitleAlign: 'center', headerShown: false }}
        drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: null }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
  },
});

export default React.memo(Routes);
