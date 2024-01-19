import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {useSelector} from 'react-redux';
import tailwind from 'twrnc';

import {Button} from '../Components/button';
import ChatUser from '../Components/chat-user';
import {RootState} from '../app/store';
import {TabType} from './Home';

export type PersonalProps = MaterialTopTabScreenProps<TabType, 'personal'>;

export default function Personal({navigation}: PersonalProps) {
  const users = useSelector((state: RootState) => state.personal.users);
  const changeScreen = (id: string, username: string) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'PersonalChat',
        params: {id, username},
      }),
    );
  };

  const friendList = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'UserList',
      }),
    );
  };
  return (
    <ScrollView style={tailwind`bg-[#1e2030] py-4 px-3`}>
      {users.map(val => {
        return (
          <ChatUser
            key={val.id}
            changeScreen={changeScreen}
            id={val.id}
            username={val.username}
          />
        );
      })}
      <View>
        <Button text="Add Friend" variant="default" onPress={friendList} />
      </View>
    </ScrollView>
  );
}
