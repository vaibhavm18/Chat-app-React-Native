import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import tailwind from 'twrnc';
import ChatRoom from '../Components/chatroom';
import Profile from '../Components/profile';
import {RootStackParamList} from '../MainStack';

export type personalChatProps = NativeStackScreenProps<
  RootStackParamList,
  'PersonalChat'
>;

export default function PersonalChat({navigation, route}: personalChatProps) {
  const goBack = () => {
    navigation.pop();
  };
  const username = 'vaibhav';
  return (
    <View style={tailwind`bg-[#1e2030] h-full flex p-2`}>
      <Profile typeChat="Unfriend" goBack={goBack} username={username} />
      <ChatRoom username="vaibhav" />
    </View>
  );
}
