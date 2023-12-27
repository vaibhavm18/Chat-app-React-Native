import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './Screen/Home';
import Notification from './Screen/Notification';

export type RootStackParamList = {
  Home: undefined;
  Notification: undefined;
  Login: undefined;
  Signup: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{header: () => null}}
        />
        <Stack.Screen name="Notification" component={Notification} />
      </Stack.Navigator>
    </>
  );
}
