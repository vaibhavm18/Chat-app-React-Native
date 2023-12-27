import React from 'react';
import MainStack from './MainStack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';

export default function App() {
  const isAuthenticate = true;
  return (
    <NavigationContainer>
      {isAuthenticate ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
