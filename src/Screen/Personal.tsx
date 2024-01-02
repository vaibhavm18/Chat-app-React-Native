import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View} from 'react-native';
import tailwind from 'twrnc';
import {Button} from '../Components/button';
import ChatUser from '../Components/chat-user';
import {TabType} from './Home';

export type PersonalProps = MaterialTopTabScreenProps<TabType, 'personal'>;

export default function Personal({navigation}: PersonalProps) {
  const changeScreen = (id: string) => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'ChatRoom',
        params: {id, typeOfChat: 'Personal'},
      }),
    );
  };
  return (
    <ScrollView style={tailwind`bg-[#1e2030] py-4 px-3`}>
      <ChatUser username="Vaibhav" changeScreen={changeScreen} id="a" />
      <View>
        <Button text="Add Friend" variant="default" />
      </View>
    </ScrollView>
  );
}
