import {useQuery} from '@tanstack/react-query';
import React from 'react';
import {Text, View} from 'react-native';
import ChatRoom from './Screen/ChatRoom';
import GroupList from './Screen/GroupList';
import Home from './Screen/Home';
import {Login} from './Screen/Login';
import Notification from './Screen/Notification';
import {Signup} from './Screen/SignUp';
import UserList from './Screen/UserList';
import {authenticate} from './api';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch} from 'react-redux';
import {login} from './features/auth/authSlice';

export type RootStackParamList = {
  Home: undefined;
  Notification: undefined;
  Login: undefined;
  Signup: undefined;
  ChatRoom: {id: string; typeOfChat: 'personal' | 'Group'};
  UserList: undefined;
  GroupList: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
  const dispatch = useDispatch();
  const {data, isError, isLoading, isSuccess} = useQuery({
    queryKey: ['authenticate'],
    queryFn: authenticate,
    staleTime: Infinity,
  });

  if (isSuccess) {
    dispatch(login({_id: '123', isLogin: true, token: '', username: ''}));
  }

  return (
    <>
      {isLoading ? (
        <View>
          <Text>Loading</Text>
        </View>
      ) : (
        <Stack.Navigator>
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
            name="ChatRoom"
            component={ChatRoom}
            options={{header: () => null}}
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
      )}
    </>
  );
}
