import React from 'react';
import Home from './Screen/Home';
import {Login} from './Screen/Login';
import Notification from './Screen/Notification';
import {Signup} from './Screen/SignUp';
import UserList from './Screen/UserList';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import GroupChat from './Screen/GroupChat';
import GroupList from './Screen/GroupList';
import PersonalChat from './Screen/PersonalChat';
import {isAuthenticated} from './features/auth/authSlice';

export type RootStackParamList = {
  Home: undefined;
  Notification: undefined;
  Login: undefined;
  Signup: undefined;
  UserList: undefined;
  GroupList: undefined;
  PersonalChat: {id: string};
  GroupChat: {id: string};
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
  const isLogin = useSelector(isAuthenticated);
  return (
    <Stack.Navigator>
      {isLogin ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="GroupList"
            component={GroupList}
            options={{
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTintColor: 'white',
            }}
          />
          <Stack.Screen
            name="PersonalChat"
            component={PersonalChat}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name="GroupChat"
            component={GroupChat}
            options={{
              header: () => null,
            }}
          />
        </>
      ) : (
        <>
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
        </>
      )}
    </Stack.Navigator>
  );
}
