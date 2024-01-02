import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ChatRoom from './Screen/ChatRoom';
import Home from './Screen/Home';
import List from './Screen/List';
import Notification from './Screen/Notification';

export type RootStackParamList = {
  Home: undefined;
  Notification: undefined;
  Login: undefined;
  Signup: undefined;
  ChatRoom: {id: string; typeOfChat: 'personal' | 'Group'};
  List: {typeOfList: 'personal' | 'Group'};
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
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </>
  );
}
