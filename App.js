/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import { StatusBar } from 'react-native';

import Public from './src/routes/Public';

export default () => {
  return (
    <Public
      onNavigationStateChange={(prevState, newState) => {
        const { index, routes } = newState;
        if (routes && routes[index]) {
          const route = routes[index];
          if (route.routeName === 'Home') {
            StatusBar.setBackgroundColor('transparent');
            StatusBar.setBarStyle('dark-content');
            StatusBar.setTranslucent(true);
          } else {
            StatusBar.setBackgroundColor('rgb(117,117,117)');
            StatusBar.setBarStyle('dark-content');
            StatusBar.setTranslucent(false);
          }
        }
      }}
    />
  );
};
