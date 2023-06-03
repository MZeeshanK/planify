import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './screens/auth/Onboarding';
import SignIn from './screens/auth/SignIn';
import SignUp from './screens/auth/SignUp';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: null}}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);
