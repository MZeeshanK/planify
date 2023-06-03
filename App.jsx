import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/Routes';

const App = () => {
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

  if (user) {
    const logout = () => {
      auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    };

    return (
      <>
        <Text style={{margin: 40}}>Welcome</Text>
        <Text onPress={logout} style={{borderWidth: 1, color: 'blue'}}>
          {' '}
          Logout
        </Text>
      </>
    );
  }

  console.log('user', user);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
