import React from 'react';
import {Login} from './Screen/Login';
import {Signup} from './Screen/SignUp';
import {Stack} from './MainStack';

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
}
