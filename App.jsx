import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Routes from './src/Routes';

import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#ffffff',
    },
  };

  return (
    <Provider store={store}>
      <NavigationContainer theme={MyTheme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
