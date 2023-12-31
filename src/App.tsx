import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default function App() {
  const isAuthenticate = true;
  return (
    <NavigationContainer>
      {isAuthenticate ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
